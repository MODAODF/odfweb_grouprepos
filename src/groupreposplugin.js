/*
 * Copyright (c) 2014 Vincent Petry <pvince81@owncloud.com>
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

/* eslint-disable */
(function(OCA) {
	/**
	 * Registers the favorites file list from the files app sidebar.
	 *
	 * @namespace OCA.Files.GroupRepossPlugin
	*/
	OCA.Files.GroupRepossPlugin = {
		name: 'GroupRepos',

		/**
		 * @type OCA.Files.GroupRepossFileList
		 */
		grouprepossFileList: null,

		attach: function () {
			const self = this;
			$('#app-content-groupreposslist').on('show.plugin-grouprepos', function (e) {
				self.showFileList($(e.target));
			});
			$('#app-content-groupreposslist').on('hide.plugin-grouprepos', function () {
				self.hideFileList();
			});
		},

		detach: function () {
			if (this.grouprepossFileList) {
				this.grouprepossFileList.destroy();
				OCA.Files.fileActions.off('setDefault.plugin-grouprepos', this._onActionsUpdated);
				OCA.Files.fileActions.off('registerAction.plugin-grouprepos', this._onActionsUpdated);
				$('#app-content-groupreposslist').off('.plugin-grouprepos');
				this.grouprepossFileList = null;
			}
		},

		showFileList: function ($el) {
			if (!this.grouprepossFileList) {
				this.grouprepossFileList = this._createGroupRepossFileList($el);
			}
			return this.grouprepossFileList;
		},

		hideFileList: function () {
			if (this.grouprepossFileList) {
				this.grouprepossFileList.$fileList.empty();
			}
		},

		/**
		 * Creates the favorites file list.
		 *
		 * @param $el container for the file list
		 * @return {OCA.Files.GroupRepossFileList} file list
		 */
		_createGroupRepossFileList: function ($el) {
			const fileActions = this._createFileActions();
			// register favorite list for sidebar section
			return new OCA.Files.GroupRepossFileList(
				$el, {
				fileActions: fileActions,
				// The file list is created when a "show" event is handled,
				// so it should be marked as "shown" like it would have been
				// done if handling the event with the file list already
				// created.
				shown: true
			}
			);
		},

		_createFileActions: function () {
			// inherit file actions from the files app
			const fileActions = new OCA.Files.FileActions();
			// note: not merging the legacy actions because legacy apps are not
			// compatible with the sharing overview and need to be adapted first
			groupReposFileActions = this._groupReposFileListActions(fileActions);
			groupReposFileActions.merge(OCA.Files.fileActions);

			if (!this._globalActionsInitialized) {
				// in case actions are registered later
				this._onActionsUpdated = _.bind(this._onActionsUpdated, this);
				OCA.Files.fileActions.on('setDefault.plugin-grouprepos', this._onActionsUpdated);
				OCA.Files.fileActions.on('registerAction.plugin-grouprepos', this._onActionsUpdated);
				this._globalActionsInitialized = true;
			}
			// when the user clicks on a folder, redirect to the corresponding
			// folder in the files app instead of opening it directly
			fileActions.register('dir', 'Open', OC.PERMISSION_READ, '', function (filename, context) {
				OCA.Files.App.setActiveView('files', { silent: true });
				OCA.Files.App.fileList.changeDirectory(OC.joinPaths(context.$file.attr('data-path'), filename), true, true);
			});
			fileActions.setDefault('dir', 'Open');
			return fileActions;
		},

		_onActionsUpdated: function (ev) {
			if (ev.action) {
				this.grouprepossFileList.fileActions.registerAction(ev.action);
			} else if (ev.defaultAction) {
				this.grouprepossFileList.fileActions.setDefault(
					ev.defaultAction.mime,
					ev.defaultAction.name
				);
			}
		},

		_groupReposFileListActions(fileActions) {
			fileActions.registerAction({
				name: 'MoveCopy',
				displayName: t('files', 'Copy'),
				mime: 'all',
				order: -25,
				permissions: OC.PERMISSION_READ,
				iconClass: 'icon-external',
				actionHandler: function (filename, context) {
					var actions = OC.dialogs.FILEPICKER_TYPE_COPY;
					var dialogDir = context.dir;
					if (typeof context.fileList.dirInfo.dirLastCopiedTo !== 'undefined') {
						dialogDir = context.fileList.dirInfo.dirLastCopiedTo;
					}
					OC.dialogs.filepicker(t('files', 'Choose target folder'), function(targetPath, type) {
						if (type === OC.dialogs.FILEPICKER_TYPE_COPY) {
							context.fileList.copy(filename, targetPath, false, context.dir);
						}
							context.fileList.dirInfo.dirLastCopiedTo = targetPath;
						}, false, "httpd/unix-directory", true, actions, dialogDir);
				}
			});

			fileActions.registerAction({
				name: 'Download',
				displayName: t('files', 'Download'),
				order: -20,
				mime: 'all',
				permissions: OC.PERMISSION_READ,
				iconClass: 'icon-download',
				actionHandler: function (filename, context) {
					var dir = context.dir || context.fileList.getCurrentDirectory();
					var isDir = context.$file.attr('data-type') === 'dir';
					var url = context.fileList.getDownloadUrl(filename, dir, isDir);

					var downloadFileaction = $(context.$file).find('.fileactions .action-download');

					// don't allow a second click on the download action
					if(downloadFileaction.hasClass('disabled')) {
						return;
					}

					if (url) {
						var disableLoadingState = function() {
							context.fileList.showFileBusyState(filename, false);
						};

						context.fileList.showFileBusyState(filename, true);
						OCA.Files.Files.handleDownload(url, disableLoadingState);
					}
				}
			});
			return fileActions;
		}
	};


})(OCA);
OC.Plugins.register('OCA.Files.App', OCA.Files.GroupRepossPlugin);

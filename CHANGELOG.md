## 12.0.1

- Display group names in occ output
- Allow disabling sharing of grouprepo root
- Speedup getting the list of groups in the admin interface

## 12.0.0

- Compatibility with PHP 7.4 and Nextcloud 24 @CarlSchwan
- Improved compatibility with Oracle DB @CarlSchwan
- Performance improvement when getting root storage id @icewind1991
- Better synchronisatin with the desktop client @mejo
- Fix expiration when storage is unlimited and auto expiration is on @CarlSchwan
- Dispatch audit event when changing ACL rules @CarlSchwan
- Performance improvement and get ACL in CLI command @rotdrop

## 10.0.0-beta1

* [#1239](https://github.com/nextcloud/grouprepos/pull/1239) Check for naming conflicts before returning the user mounts @icewind1991
* [#1244](https://github.com/nextcloud/grouprepos/pull/1244) Add advanced permission toggle to OCS call examples. @ATran31
* [#1255](https://github.com/nextcloud/grouprepos/pull/1255) Add missing return code. This relates to issue #1154 @michaelernst
* [#1263](https://github.com/nextcloud/grouprepos/pull/1263) Check folder permissions when restoring a trashbin item @icewind1991
* [#1291](https://github.com/nextcloud/grouprepos/pull/1291) Drop redundant indexes @rullzer
* [#1318](https://github.com/nextcloud/grouprepos/pull/1318) Fix #801 Folder icon in shared group repo @juliushaertl
* [#1331](https://github.com/nextcloud/grouprepos/pull/1331) Add tooltip for user/group name in sidebar ACL list @danxuliu
* [#1334](https://github.com/nextcloud/grouprepos/pull/1334) Fix deletion failing even if there's an entry in the folder listing @noiob
* [#1335](https://github.com/nextcloud/grouprepos/pull/1335) Fix "contenthash" not included in chunk filename @danxuliu
* [#1340](https://github.com/nextcloud/grouprepos/pull/1340) Cast grouprepo id to string when trying to create a new folder @juliushaertl
* [#1346](https://github.com/nextcloud/grouprepos/pull/1346) Obtain cacheEntry for created folders and handle errors more gracefully @juliushaertl
* [#1360](https://github.com/nextcloud/grouprepos/pull/1360) Make clear arguments are ids and not names @nickvergessen
* [#1366](https://github.com/nextcloud/grouprepos/pull/1366) Load all acl rules for a folder/search result in one go @icewind1991
* [#1374](https://github.com/nextcloud/grouprepos/pull/1374) PreventDefault on folder create submit event @icewind1991
* [#1375](https://github.com/nextcloud/grouprepos/pull/1375) Fix wrong method call to check restore permissions @icewind1991
* [#1380](https://github.com/nextcloud/grouprepos/pull/1380) Add hint for subfolder grouprepos to readme @icewind1991
* [#1395](https://github.com/nextcloud/grouprepos/pull/1395) Fixed searching for groups in the sharing sideview @jngrb
* [#1406](https://github.com/nextcloud/grouprepos/pull/1406) Sidebar view: refresh ACL entries when fileInfo prop changes #1378 @jngrb
* [#1415](https://github.com/nextcloud/grouprepos/pull/1415) Moved Note to the pinned issue. @pierreozoux
* [#1472](https://github.com/nextcloud/grouprepos/pull/1472) Enforce string for folder id when obtaining the trash folder @juliushaertl
* [#1484](https://github.com/nextcloud/grouprepos/pull/1484) Only return user result once @juliushaertl
* [#1534](https://github.com/nextcloud/grouprepos/pull/1534) Cancel ACL user/group search requests @juliushaertl
* [#1224](https://github.com/nextcloud/grouprepos/pull/1224) Fix file drop shared folders @danxuliu


## 8.0.0

- Show inherited ACLs in the files sidebar
- Improve performance when querying managing users/groups
- Fix issue causing "$path is an integer" logging in versions backend
- Nextcloud 20 compatiblity

## 6.0.6

- ACL: Increase performance by selecting on indexed column @Deltachaos
- Use a lazy folder @rullzer

## 6.0.5

- Nextcloud 19 compatibility

## 6.0.4

- Check ACL before restoring files from the trashbin
- Do not allow restoring files at an existing target
- Return the mountpoint owner as a fallback
- Bump dependencies

## 6.0.3

- Do not ship unneeded files with the release

## 6.0.2

- Allow to detect the file path for shares inside of grouprepos, e.g. when they are matched in workflow rules
- Bump dependencies

## 6.0.1

- Fix sharing files from grouprepos trough ocs api
- Show the full path including grouprepo in trashbin

## 6.0.0

- Nextcloud 18 compatibility
- Search for users by display name
- Only check for admin permissions if needed
- Check for ACL list in trash backend
- Bump dependencies

## 5.0.4
- Fix etag propagation which caused the desktop client not syncing changes
- Check if the parent folder is updatable when moving

## 5.0.3
- Handle advanced permission rules for users/groups that no longer exist

## 5.0.2
- Allow longer path as grouprepo mount points

## 5.0.1
- Improved error handling when removing items from trash
- Fix grouprepos breaking updating calendar details

## 5.0.0
- 17 compatiblity
- Use grouprepo storage for versioning

## 4.1.2
- Allow longer path as grouprepo mount points

## 4.1.1
- Improved error handling when removing items from trash
- Fix grouprepos breaking updating calendar details

## 4.1.0
- Allow groups to manage ACL permissions
- Bump dependencies
- Fix IE11 compatibility
- Check for naming conflicts before returning the user mouns

## 4.0.5
- Bump dependencies
- Update translations
- Proper values returned from Storage Wrapper fixing some etag bugs

## 4.0.4
- Fix issue with ACL cache returning empty result sets
- Bump dependencies

## 4.0.3
- Fix Collabora documents opening in read only in some cases
- Improve dark mode support

## 4.0.2
- Fix handling of public pages
- Fix advanced permissions not applying on the root of a grouprepos

## 4.0.1
- Fix not being able to delete advanced permission rules from the web interface
- Use display names in advanced permissions interface
- Fix not being able to open files in Collabora Online that don't have share permissions

## 4.0.0
- Access control list support for advanced permission management
- Improve performance of listing group repos with large filecache tables
- Block deleting of folders that have non-deletable items in them
- Improved admin page layout
- Fix grouprepos icons sometimes not being themed correctly.
- Fix moving shared grouprepos items to trashbin.

## 3.0.1

This release is aimed for Nextcloud 14/15 users who upgraded to 3.0.0 which was
falsely marked as compatible for those Nextcloud releases.

Additionally the following fixes are included

- Fix grouprepos icons sometimes not being themed correctly.
- Fix moving shared grouprepos items to trashbin.

## 1.2.0

 - Allow changing the mount point of existing group repos
 - Add OCS api for managing folders
 - Fix folder icons in public shares
 - Merge permissions if a user has access to a folder trough multiple groups

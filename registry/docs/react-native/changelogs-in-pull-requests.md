# Changelogs in Pull Requests

The changelog entry in your pull request serves as a sort of "tl;dr:" for your changes: do they affect Android? are these breaking changes? is something new being added?

Providing a changelog using a standardized format helps release coordinators write release notes. Please include a changelog as part of your pull request description. Your pull request description will be used as the commit message should the pull request get merged.

### Format[​](#format "Direct link to Format")

A changelog entry has the following format

```
## Changelog:

[Category] [Type] - Message
```

The "Category" field may be one of:

- **Android**, for changes that affect Android.
- **iOS**, for changes that affect iOS.
- **General**, for changes that do not fit any of the other categories.
- **Internal**, for changes that would not be relevant to developers consuming the release notes.

The "Type" field may be one of:

- **Breaking**, for breaking changes.
- **Added**, for new features.
- **Changed**, for changes in existing functionality.
- **Deprecated**, for soon-to-be removed features.
- **Removed**, for now removed features.
- **Fixed**, for any bug fixes.
- **Security**, in case of vulnerabilities.

Finally, the "Message" field may answer "what and why" on a feature level. Use this to briefly tell React Native users about notable changes.

For more detail, see [How do I make a good changelog?](https://keepachangelog.com/en/1.0.0/#how) and [Why keep a changelog?](https://keepachangelog.com/en/1.0.0/#why)

### Examples[​](#examples "Direct link to Examples")

- `[General] [Added] - Add snapToOffsets prop to ScrollView component`
- `[General] [Fixed] - Fix various issues in snapToInterval on ScrollView component`
- `[iOS] [Fixed] - Fix crash in RCTImagePicker`

### FAQ[​](#faq "Direct link to FAQ")

#### What if my pull request contains changes to both Android and JavaScript?[​](#what-if-my-pull-request-contains-changes-to-both-android-and-javascript "Direct link to What if my pull request contains changes to both Android and JavaScript?")

Use the Android category.

#### What if my pull request contains changes to both Android and iOS?[​](#what-if-my-pull-request-contains-changes-to-both-android-and-ios "Direct link to What if my pull request contains changes to both Android and iOS?")

Use the General category if the change is made in a single pull request.

#### What if my pull request contains changes to Android, iOS, and JavaScript?[​](#what-if-my-pull-request-contains-changes-to-android-ios-and-javascript "Direct link to What if my pull request contains changes to Android, iOS, and JavaScript?")

Use the General category if the change is made in a single pull request.

#### What if...?[​](#what-if "Direct link to What if...?")

Any changelog entry is better than none. If you are unsure if you have picked the right category, use the "message" field to succinctly describe your change.

These entries are used by the [`@rnx-kit/rn-changelog-generator`](https://github.com/microsoft/rnx-kit/tree/main/incubator/rn-changelog-generator) script to build a rough draft, which is then edited by a release coordinator.

Your notes will be used to add your change to the correct location in the final release notes.

***

# Contribution License Agreement

You must sign a Contribution License Agreement (CLA) before your pull request can be merged. This a one-time requirement for Meta projects in GitHub. You can read more about [Contributor License Agreements (CLA)](https://en.wikipedia.org/wiki/Contributor_License_Agreement) on Wikipedia.

However, you don't have to do this up-front. We welcome you to follow, fork, and submit a pull request.

When your pull request is created, it is classified by the Facebook GitHub bot. If you have not signed a CLA, the bot will provide instructions for [signing a CLA](https://code.facebook.com/cla) before your pull request can be considered eligible for merging. Once you have done so, the current and all future pull requests will be labelled as "CLA Signed".

Signing the CLA might sound scary, but it's actually very simple and can be done in less than a minute.

***

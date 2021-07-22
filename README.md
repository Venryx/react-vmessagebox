# React - VMessageBox

Message-box solution built using ReactJS and MobX.

### Installation

```
npm install react-vmessagebox react-vextensions react-vcomponents --save-exact
```

The `--save-exact` flag is recommended, since this package uses [Explicit Versioning](https://medium.com/sapioit/why-having-3-numbers-in-the-version-name-is-bad-92fc1f6bc73c) (`Release.Breaking.FeatureOrFix`) rather than SemVer (`Breaking.Feature.Fix`).

To let npm increment `FeatureOrFix` (recommended), prepend "`~`" to its version in `package.json`. (for `Breaking`, prepend "`^`")
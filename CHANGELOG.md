# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### 2020-11-09
- Changed | bound first contents to real translations
- Added   | reducer and default state for user settings
- Added   | modules can now be activated by address navigation

### 2020-11-08
- Added   | container and component for user settings
- Added   | setting "display language"
- Added   | basic styling for settings

### 2020-10-30
- Changed | item wishlist-icon is now a separate container/component
- Changed | item link bar now a separate container/component
- Added   | item link bar to wishlist
- Added   | added settings icon to header

### 2020-10-29
- Added   | provider links in overview
- Changed | wishlist-icon is now bound to item image
- Changed | debounced search field input

### 2020-10-27
- Added   | navigationId is now set from the address-bar path if the page is refreshed
- Added   | address-bar is updated to current path if current navigation has changed

### 2020-10-26
- Changed | overview and wishlist is now coupled with virtual information items

### unknown
- Added   | Wishlist icon looks and placing
- Fixed   | navigation issues
- Added   | added information "currentUserId"
- Added   | added information "guestUserId"
- Added   | Modules can now be switched (item-overview, wishlist, ...)
- Added   | Node-Sass as dev-dep, styling, itcss, refactors the structure and some classes.
- Added   | Feature "wishlist" (redux-store, module, repositories)
- Added   | redux dev-tools for better debugging
- Added   | page now uses react-redux for processing of state
- Added   | information-items are now retrieved and displayed

## [Released]

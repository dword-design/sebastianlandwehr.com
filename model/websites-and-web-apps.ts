import endent from 'endent';

import accessibilityViewUrl from '@/assets/projects/accessibility-view.png';
import feedbutlerUrl from '@/assets/projects/feedbutler.png';
import githubRepositoryListBadgesUrl from '@/assets/projects/github-repository-list-badges.png';
import githubSavedFiltersUrl from '@/assets/projects/github-saved-filters.png';
import myNpmStatsUrl from '@/assets/projects/my-npm-stats.png';

export default [
  {
    description:
      'Feedbutler sends the newest posts of your subscribed feeds summed up as a single mail to you. So you stay up to date without having to open an extra feed reader.',
    imageUrl: feedbutlerUrl,
    projectUrl: 'https://feedbutler.app',
    title: 'Feedbutler',
  },
  {
    description: 'Package stats and dependents for NPM authors.',
    imageUrl: myNpmStatsUrl,
    projectUrl: 'https://my-npm-stats.org',
    title: 'my-npm-stats',
  },
  {
    description: endent`
      Browser extension that converts an arbitrary website into its accessibility relevant form.<br/>
      <a href="https://chrome.google.com/webstore/detail/accessibility-view/ekpmnemcmjcimpnmofmiaeoggjkjohjg" target="_blank">Chrome</a><br/>
      <a href="https://addons.mozilla.org/de/firefox/addon/accessibility-view" target="_blank">Firefox</a>
    `,
    imageUrl: accessibilityViewUrl,
    projectUrl:
      'https://chrome.google.com/webstore/detail/accessibility-view/ekpmnemcmjcimpnmofmiaeoggjkjohjg',
    title: 'Accessibility View',
  },
  {
    description: endent`
      Allows to save issue and pull request filters on GitHub and access them via the main menu.<br/>
      <a href="https://chrome.google.com/webstore/detail/github-saved-filters/olkmmlhdbdmibnebknmghijmdijadhpf?hl=de" target="_blank">Chrome</a><br/>
      <a href="https://addons.mozilla.org/de/firefox/addon/github-saved-filters/" target="_blank">Firefox</a>
    `,
    imageUrl: githubSavedFiltersUrl,
    projectUrl:
      'https://chrome.google.com/webstore/detail/github-saved-filters/olkmmlhdbdmibnebknmghijmdijadhpf?hl=de',
    title: 'GitHub Saved Filters',
  },
  {
    description: endent`
      Displays badges in the GitHub repository list of a user.<br/>
      <a href="https://chrome.google.com/webstore/detail/github-repository-list-ba/eahkhdaolahcidlldobhnaepjnfmlbba" target="_blank">Chrome</a><br/>
      <a href="https://addons.mozilla.org/de/firefox/addon/github-repository-list-badges/" target="_blank">Firefox</a>
    `,
    imageUrl: githubRepositoryListBadgesUrl,
    projectUrl:
      'https://chrome.google.com/webstore/detail/github-repository-list-ba/eahkhdaolahcidlldobhnaepjnfmlbba',
    title: 'GitHub Repository List Badges',
  },
];

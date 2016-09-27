import {config} from '../../config/config';
import fetch from 'isomorphic-fetch';

/**
 * Make repositories request
 * @param githubUsername
 * @returns {Promise}
 */
export function repositoriesRequest(githubUsername) {
  if (config.useFixtures === true) {
    return Promise.resolve(sampleRepositoriesResponse());
  } else {
    return fetch(getRepositoriesUri(githubUsername))
      .then((res) => res.json());

  }
}

export function getRepositoriesUri(githubUsername) {
  return `https://api.github.com/users/${githubUsername}/repos?per_page=100`;
}

export function sampleRepositoriesResponse() {
  return [
    {
      "id": 64619295,
      "name": "bitmap-fonts",
      "full_name": "user/bitmap-fonts",
      "owner": {
        "login": "user",
        "id": 14959,
        "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/user",
        "html_url": "https://github.com/user",
        "followers_url": "https://api.github.com/users/user/followers",
        "following_url": "https://api.github.com/users/user/following{/other_user}",
        "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/user/subscriptions",
        "organizations_url": "https://api.github.com/users/user/orgs",
        "repos_url": "https://api.github.com/users/user/repos",
        "events_url": "https://api.github.com/users/user/events{/privacy}",
        "received_events_url": "https://api.github.com/users/user/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/user/bitmap-fonts",
      "description": "Monospaced bitmap fonts for X11, good for terminal use.",
      "fork": true,
      "url": "https://api.github.com/repos/user/bitmap-fonts",
      "forks_url": "https://api.github.com/repos/user/bitmap-fonts/forks",
      "keys_url": "https://api.github.com/repos/user/bitmap-fonts/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/user/bitmap-fonts/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/user/bitmap-fonts/teams",
      "hooks_url": "https://api.github.com/repos/user/bitmap-fonts/hooks",
      "issue_events_url": "https://api.github.com/repos/user/bitmap-fonts/issues/events{/number}",
      "events_url": "https://api.github.com/repos/user/bitmap-fonts/events",
      "assignees_url": "https://api.github.com/repos/user/bitmap-fonts/assignees{/user}",
      "branches_url": "https://api.github.com/repos/user/bitmap-fonts/branches{/branch}",
      "tags_url": "https://api.github.com/repos/user/bitmap-fonts/tags",
      "blobs_url": "https://api.github.com/repos/user/bitmap-fonts/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/user/bitmap-fonts/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/user/bitmap-fonts/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/user/bitmap-fonts/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/user/bitmap-fonts/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/user/bitmap-fonts/languages",
      "stargazers_url": "https://api.github.com/repos/user/bitmap-fonts/stargazers",
      "contributors_url": "https://api.github.com/repos/user/bitmap-fonts/contributors",
      "subscribers_url": "https://api.github.com/repos/user/bitmap-fonts/subscribers",
      "subscription_url": "https://api.github.com/repos/user/bitmap-fonts/subscription",
      "commits_url": "https://api.github.com/repos/user/bitmap-fonts/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/user/bitmap-fonts/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/user/bitmap-fonts/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/user/bitmap-fonts/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/user/bitmap-fonts/contents/{+path}",
      "compare_url": "https://api.github.com/repos/user/bitmap-fonts/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/user/bitmap-fonts/merges",
      "archive_url": "https://api.github.com/repos/user/bitmap-fonts/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/user/bitmap-fonts/downloads",
      "issues_url": "https://api.github.com/repos/user/bitmap-fonts/issues{/number}",
      "pulls_url": "https://api.github.com/repos/user/bitmap-fonts/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/user/bitmap-fonts/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/user/bitmap-fonts/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/user/bitmap-fonts/labels{/name}",
      "releases_url": "https://api.github.com/repos/user/bitmap-fonts/releases{/id}",
      "deployments_url": "https://api.github.com/repos/user/bitmap-fonts/deployments",
      "created_at": "2016-07-31T22:40:11Z",
      "updated_at": "2016-07-31T22:40:23Z",
      "pushed_at": "2016-03-13T17:25:23Z",
      "git_url": "git://github.com/user/bitmap-fonts.git",
      "ssh_url": "git@github.com:user/bitmap-fonts.git",
      "clone_url": "https://github.com/user/bitmap-fonts.git",
      "svn_url": "https://github.com/user/bitmap-fonts",
      "homepage": null,
      "size": 21727,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "Shell",
      "has_issues": false,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "open_issues_count": 0,
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master"
    },
    {
      "id": 6892125,
      "name": "configs",
      "full_name": "user/configs",
      "owner": {
        "login": "user",
        "id": 14959,
        "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/user",
        "html_url": "https://github.com/user",
        "followers_url": "https://api.github.com/users/user/followers",
        "following_url": "https://api.github.com/users/user/following{/other_user}",
        "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/user/subscriptions",
        "organizations_url": "https://api.github.com/users/user/orgs",
        "repos_url": "https://api.github.com/users/user/repos",
        "events_url": "https://api.github.com/users/user/events{/privacy}",
        "received_events_url": "https://api.github.com/users/user/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/user/configs",
      "description": ":wrench: My stuff",
      "fork": false,
      "url": "https://api.github.com/repos/user/configs",
      "forks_url": "https://api.github.com/repos/user/configs/forks",
      "keys_url": "https://api.github.com/repos/user/configs/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/user/configs/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/user/configs/teams",
      "hooks_url": "https://api.github.com/repos/user/configs/hooks",
      "issue_events_url": "https://api.github.com/repos/user/configs/issues/events{/number}",
      "events_url": "https://api.github.com/repos/user/configs/events",
      "assignees_url": "https://api.github.com/repos/user/configs/assignees{/user}",
      "branches_url": "https://api.github.com/repos/user/configs/branches{/branch}",
      "tags_url": "https://api.github.com/repos/user/configs/tags",
      "blobs_url": "https://api.github.com/repos/user/configs/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/user/configs/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/user/configs/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/user/configs/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/user/configs/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/user/configs/languages",
      "stargazers_url": "https://api.github.com/repos/user/configs/stargazers",
      "contributors_url": "https://api.github.com/repos/user/configs/contributors",
      "subscribers_url": "https://api.github.com/repos/user/configs/subscribers",
      "subscription_url": "https://api.github.com/repos/user/configs/subscription",
      "commits_url": "https://api.github.com/repos/user/configs/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/user/configs/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/user/configs/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/user/configs/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/user/configs/contents/{+path}",
      "compare_url": "https://api.github.com/repos/user/configs/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/user/configs/merges",
      "archive_url": "https://api.github.com/repos/user/configs/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/user/configs/downloads",
      "issues_url": "https://api.github.com/repos/user/configs/issues{/number}",
      "pulls_url": "https://api.github.com/repos/user/configs/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/user/configs/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/user/configs/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/user/configs/labels{/name}",
      "releases_url": "https://api.github.com/repos/user/configs/releases{/id}",
      "deployments_url": "https://api.github.com/repos/user/configs/deployments",
      "created_at": "2012-11-27T22:27:12Z",
      "updated_at": "2016-07-09T01:40:35Z",
      "pushed_at": "2016-09-24T10:10:22Z",
      "git_url": "git://github.com/user/configs.git",
      "ssh_url": "git@github.com:user/configs.git",
      "clone_url": "https://github.com/user/configs.git",
      "svn_url": "https://github.com/user/configs",
      "homepage": "",
      "size": 189,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "Shell",
      "has_issues": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "open_issues_count": 0,
      "forks": 0,
      "open_issues": 0,
      "watchers": 2,
      "default_branch": "master"
    },
    {
      "id": 52626642,
      "name": "crux-ports",
      "full_name": "user/crux-ports",
      "owner": {
        "login": "user",
        "id": 14959,
        "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/user",
        "html_url": "https://github.com/user",
        "followers_url": "https://api.github.com/users/user/followers",
        "following_url": "https://api.github.com/users/user/following{/other_user}",
        "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/user/subscriptions",
        "organizations_url": "https://api.github.com/users/user/orgs",
        "repos_url": "https://api.github.com/users/user/repos",
        "events_url": "https://api.github.com/users/user/events{/privacy}",
        "received_events_url": "https://api.github.com/users/user/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/user/crux-ports",
      "description": "Personal ports collection",
      "fork": false,
      "url": "https://api.github.com/repos/user/crux-ports",
      "forks_url": "https://api.github.com/repos/user/crux-ports/forks",
      "keys_url": "https://api.github.com/repos/user/crux-ports/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/user/crux-ports/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/user/crux-ports/teams",
      "hooks_url": "https://api.github.com/repos/user/crux-ports/hooks",
      "issue_events_url": "https://api.github.com/repos/user/crux-ports/issues/events{/number}",
      "events_url": "https://api.github.com/repos/user/crux-ports/events",
      "assignees_url": "https://api.github.com/repos/user/crux-ports/assignees{/user}",
      "branches_url": "https://api.github.com/repos/user/crux-ports/branches{/branch}",
      "tags_url": "https://api.github.com/repos/user/crux-ports/tags",
      "blobs_url": "https://api.github.com/repos/user/crux-ports/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/user/crux-ports/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/user/crux-ports/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/user/crux-ports/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/user/crux-ports/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/user/crux-ports/languages",
      "stargazers_url": "https://api.github.com/repos/user/crux-ports/stargazers",
      "contributors_url": "https://api.github.com/repos/user/crux-ports/contributors",
      "subscribers_url": "https://api.github.com/repos/user/crux-ports/subscribers",
      "subscription_url": "https://api.github.com/repos/user/crux-ports/subscription",
      "commits_url": "https://api.github.com/repos/user/crux-ports/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/user/crux-ports/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/user/crux-ports/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/user/crux-ports/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/user/crux-ports/contents/{+path}",
      "compare_url": "https://api.github.com/repos/user/crux-ports/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/user/crux-ports/merges",
      "archive_url": "https://api.github.com/repos/user/crux-ports/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/user/crux-ports/downloads",
      "issues_url": "https://api.github.com/repos/user/crux-ports/issues{/number}",
      "pulls_url": "https://api.github.com/repos/user/crux-ports/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/user/crux-ports/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/user/crux-ports/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/user/crux-ports/labels{/name}",
      "releases_url": "https://api.github.com/repos/user/crux-ports/releases{/id}",
      "deployments_url": "https://api.github.com/repos/user/crux-ports/deployments",
      "created_at": "2016-02-26T19:12:22Z",
      "updated_at": "2016-02-27T23:09:27Z",
      "pushed_at": "2016-09-04T20:03:17Z",
      "git_url": "git://github.com/user/crux-ports.git",
      "ssh_url": "git@github.com:user/crux-ports.git",
      "clone_url": "https://github.com/user/crux-ports.git",
      "svn_url": "https://github.com/user/crux-ports",
      "homepage": null,
      "size": 36,
      "stargazers_count": 1,
      "watchers_count": 1,
      "language": "Shell",
      "has_issues": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "open_issues_count": 0,
      "forks": 0,
      "open_issues": 0,
      "watchers": 1,
      "default_branch": "master"
    },
    {
      "id": 6783187,
      "name": "dwm",
      "full_name": "user/dwm",
      "owner": {
        "login": "user",
        "id": 14959,
        "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/user",
        "html_url": "https://github.com/user",
        "followers_url": "https://api.github.com/users/user/followers",
        "following_url": "https://api.github.com/users/user/following{/other_user}",
        "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/user/subscriptions",
        "organizations_url": "https://api.github.com/users/user/orgs",
        "repos_url": "https://api.github.com/users/user/repos",
        "events_url": "https://api.github.com/users/user/events{/privacy}",
        "received_events_url": "https://api.github.com/users/user/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/user/dwm",
      "description": "My dwm setup with some patches",
      "fork": false,
      "url": "https://api.github.com/repos/user/dwm",
      "forks_url": "https://api.github.com/repos/user/dwm/forks",
      "keys_url": "https://api.github.com/repos/user/dwm/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/user/dwm/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/user/dwm/teams",
      "hooks_url": "https://api.github.com/repos/user/dwm/hooks",
      "issue_events_url": "https://api.github.com/repos/user/dwm/issues/events{/number}",
      "events_url": "https://api.github.com/repos/user/dwm/events",
      "assignees_url": "https://api.github.com/repos/user/dwm/assignees{/user}",
      "branches_url": "https://api.github.com/repos/user/dwm/branches{/branch}",
      "tags_url": "https://api.github.com/repos/user/dwm/tags",
      "blobs_url": "https://api.github.com/repos/user/dwm/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/user/dwm/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/user/dwm/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/user/dwm/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/user/dwm/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/user/dwm/languages",
      "stargazers_url": "https://api.github.com/repos/user/dwm/stargazers",
      "contributors_url": "https://api.github.com/repos/user/dwm/contributors",
      "subscribers_url": "https://api.github.com/repos/user/dwm/subscribers",
      "subscription_url": "https://api.github.com/repos/user/dwm/subscription",
      "commits_url": "https://api.github.com/repos/user/dwm/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/user/dwm/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/user/dwm/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/user/dwm/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/user/dwm/contents/{+path}",
      "compare_url": "https://api.github.com/repos/user/dwm/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/user/dwm/merges",
      "archive_url": "https://api.github.com/repos/user/dwm/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/user/dwm/downloads",
      "issues_url": "https://api.github.com/repos/user/dwm/issues{/number}",
      "pulls_url": "https://api.github.com/repos/user/dwm/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/user/dwm/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/user/dwm/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/user/dwm/labels{/name}",
      "releases_url": "https://api.github.com/repos/user/dwm/releases{/id}",
      "deployments_url": "https://api.github.com/repos/user/dwm/deployments",
      "created_at": "2012-11-20T18:49:10Z",
      "updated_at": "2016-05-31T16:07:52Z",
      "pushed_at": "2016-06-10T21:13:46Z",
      "git_url": "git://github.com/user/dwm.git",
      "ssh_url": "git@github.com:user/dwm.git",
      "clone_url": "https://github.com/user/dwm.git",
      "svn_url": "https://github.com/user/dwm",
      "homepage": "",
      "size": 92,
      "stargazers_count": 3,
      "watchers_count": 3,
      "language": "C",
      "has_issues": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "open_issues_count": 0,
      "forks": 0,
      "open_issues": 0,
      "watchers": 3,
      "default_branch": "master"
    },
    {
      "id": 6833012,
      "name": "st",
      "full_name": "user/st",
      "owner": {
        "login": "user",
        "id": 14959,
        "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/user",
        "html_url": "https://github.com/user",
        "followers_url": "https://api.github.com/users/user/followers",
        "following_url": "https://api.github.com/users/user/following{/other_user}",
        "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/user/subscriptions",
        "organizations_url": "https://api.github.com/users/user/orgs",
        "repos_url": "https://api.github.com/users/user/repos",
        "events_url": "https://api.github.com/users/user/events{/privacy}",
        "received_events_url": "https://api.github.com/users/user/received_events",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "html_url": "https://github.com/user/st",
      "description": "simple terminal",
      "fork": false,
      "url": "https://api.github.com/repos/user/st",
      "forks_url": "https://api.github.com/repos/user/st/forks",
      "keys_url": "https://api.github.com/repos/user/st/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/user/st/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/user/st/teams",
      "hooks_url": "https://api.github.com/repos/user/st/hooks",
      "issue_events_url": "https://api.github.com/repos/user/st/issues/events{/number}",
      "events_url": "https://api.github.com/repos/user/st/events",
      "assignees_url": "https://api.github.com/repos/user/st/assignees{/user}",
      "branches_url": "https://api.github.com/repos/user/st/branches{/branch}",
      "tags_url": "https://api.github.com/repos/user/st/tags",
      "blobs_url": "https://api.github.com/repos/user/st/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/user/st/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/user/st/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/user/st/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/user/st/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/user/st/languages",
      "stargazers_url": "https://api.github.com/repos/user/st/stargazers",
      "contributors_url": "https://api.github.com/repos/user/st/contributors",
      "subscribers_url": "https://api.github.com/repos/user/st/subscribers",
      "subscription_url": "https://api.github.com/repos/user/st/subscription",
      "commits_url": "https://api.github.com/repos/user/st/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/user/st/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/user/st/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/user/st/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/user/st/contents/{+path}",
      "compare_url": "https://api.github.com/repos/user/st/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/user/st/merges",
      "archive_url": "https://api.github.com/repos/user/st/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/user/st/downloads",
      "issues_url": "https://api.github.com/repos/user/st/issues{/number}",
      "pulls_url": "https://api.github.com/repos/user/st/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/user/st/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/user/st/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/user/st/labels{/name}",
      "releases_url": "https://api.github.com/repos/user/st/releases{/id}",
      "deployments_url": "https://api.github.com/repos/user/st/deployments",
      "created_at": "2012-11-23T20:54:36Z",
      "updated_at": "2016-07-27T09:23:03Z",
      "pushed_at": "2016-08-12T20:47:54Z",
      "git_url": "git://github.com/user/st.git",
      "ssh_url": "git@github.com:user/st.git",
      "clone_url": "https://github.com/user/st.git",
      "svn_url": "https://github.com/user/st",
      "homepage": "",
      "size": 119,
      "stargazers_count": 2,
      "watchers_count": 2,
      "language": "C",
      "has_issues": false,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 2,
      "mirror_url": null,
      "open_issues_count": 1,
      "forks": 2,
      "open_issues": 1,
      "watchers": 2,
      "default_branch": "master"
    }
  ];
}

export function requestPath() {
  return '/users/user';
}
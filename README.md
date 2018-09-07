# Userscripts
Welcome to my small script collection, I hope you'll find it useful. :)
Userscripts for google services are updated as soon as I find something
missing/wrong and fix it. I don't spend 24/7 using only these things, however,
so if there's something wrong and no mention in readme or directly in script,
notify me(mail/issue/...).
## How to install
You'll need an extension for your browser to use these scripts.
##### Prerequisites
- [Tampermonkey(Chrome)](https://tampermonkey.net)
- [Greasemonkey(Firefox)](http://www.greasespot.net)
- [Violent monkey(Opera)](
   https://addons.opera.com/sk/extensions/details/violent-monkey/)
- [Greasemonkey Port(SeaMonkey)](https://sourceforge.net/projects/gmport/)

##### Installation
###### GitHub
- Navigate to the script(<code>*.user.js</code>) you want to install in the
  repository
- Click on the <code>Raw</code> button! The extension will recognize
  <code>*.user.js</code> file.
- Install it!

###### Other sites
- [Greasy Fork](https://greasyfork.org/en/users/29508-keyweeusr)
- [OpenUserJS](https://openuserjs.org/users/KeyWeeUsr)

Congratulations, now you can use the script!

If you experienced any problems, please visit <code>Issues</code> section. If
a script doesn't work in Opera, read [this](
https://dev.opera.com/extensions/architecture-overview/) - `eval()` is used to
access files in this repository such as `emoji.js`.
## Gallery
##### <img src="https://www.google.sk/docs/about/favicon.ico" width=16></img>&nbsp;Nighty-night Google Docs
A dark Lightroom/Photoshop CS6-like theme for Google Docs. Almost everything is
adjusted to working at night. Say no more to those white eye-burning pages!

<img src="https://raw.githubusercontent.com/KeyWeeUsr/Userscripts/master/Nighty-night-Google-Docs/nightynight.png" width=500></img>

###### Missing stuff
not/bad implemented or missing after Google updates
- Help (dynamically created iframes)
  - Docs Help
  - Report a problem

##### <img src="https://translate.google.com/favicon.ico" width=16></img>&nbsp;Nighty-night Google Translate
Similar theme as for Google Docs making Google Translate & Google Docs a good
combination for writing at night even in foreign language.

<img src="https://raw.githubusercontent.com/KeyWeeUsr/Userscripts/master/Nighty-night-Google-Translate/nightynight2.png" width=500></img>

##### <img src="https://pastebin.com/favicon.ico" width=16></img>&nbsp;CopyPasteBin
CopyPasteBin allows you to simply click on a button and copy whole paste
content from a PasteBin snippet.

<img src="https://raw.githubusercontent.com/KeyWeeUsr/Userscripts/master/CopyPasteBin/copypastebin.png" width=500></img>

##### <img src="https://assets-cdn.github.com/favicon.ico" width=16></img>&nbsp;CopyCode
CopyCode for GitHub allows you to simply click on a button and copy whole
code-block to your clipboard. If clipboard fails (Safari, or old browser maybe)
the text still remains selected, so you can copy the content manually anyway.

<img src="https://raw.githubusercontent.com/KeyWeeUsr/Userscripts/master/CopyCode/copycode.png" width=500></img>

##### <img src="https://assets-cdn.github.com/favicon.ico" width=16></img>&nbsp;Halloween
Halloween for GitHub brings back the pumpkin-colored commit calendar featured
as Halloween egg in 2016.

<img src="https://raw.githubusercontent.com/KeyWeeUsr/Userscripts/master/Halloween/halloween.png" width=500></img>

##### <img src="https://assets-cdn.github.com/favicon.ico" width=16></img>&nbsp;Top Repos (not available on Greasy Fork)
Top Repos for GitHub changes the "Popular repositories" (left) box to show only
user's repositories ordered by star count. The script makes finding the real
popular repos easier than going through `Sources` on `Repositories` tab which
shows the user's repos unordered.

_**No longer maintained due to GitHub's new ["Pinned repositories"](https://github.com/blog/2191-pin-repositories-to-your-github-profile)**_

The script still works if you have no pinned repos set.

<img src="https://raw.githubusercontent.com/KeyWeeUsr/Userscripts/master/TopRepos/toprepos.png" width=500></img>

##### <img src="https://assets.tumblr.com/images/favicons/favicon.ico" width=16></img>&nbsp;AutoReblog2Queue
Userscript for Tumblr Dashboard which automatically changes the reblogging
option to "Add to queue" and reblogs it immediately.

Basically this little script takes an advantage of the already available
behavior of Tumblr keyboard shortcuts i.e. navigating via J and K keys
together with R for reblogging. The script works in the background, checks
whether the modal window is present (waits if not), changes the reblogging
options and then presses the "Queue" button (changed "Reblog" button).

Just use these navigation keys: J (up), K (down), L (heart), R (reblog).

You can toggle the autoreblogging script on/off with the Ctrl + Q keys.
It's turned ON by default.

Also, if you deactivated the script and pressed R (reblog), you can always
activate it back with Ctrl + Q keys and the script will automatically add
the current post you are reblogging to the queue.

##### <img src="https://www.geocaching.com/favicon.ico" width=16\
></img>&nbsp;GeocachingPremiumOnlyLOG
Userscript for Geocaching.com that adds a button for a link to log even
"Premium Member Only Geocache" via direct access to the log that ordinary
people might not be able to find.

<img src="https://raw.githubusercontent.com/KeyWeeUsr/Userscripts/master/GeocachingPremiumOnlyLOG/gcpremiumonlylog.png" width=500></img>

---

**_Icons_**
- Images used as icons for scripts in `README.md` and/or directly as `// @icon`
  in *.user.js files are _not part of this repository_.
- The icons are not under any of this repository's license, they belong to
  their original  websites and creators.
- Image files are not directly available in any of the repository's files.
- Icons are set only with url to favicons.

Prepare the following stuff.
 
* git
    * [download] (https://git-scm.com/downloads) and run the installer
    * choose the second option `using git at windows prompt`
    * choose `check as windows CR/LF and commit as UNIX CR`.  Installation done!
    * active `git bash` from start menu.  This is a mingw command prompt, which emulates standard unix operations.
    * try command 

    git --version

* nodejs
    * nodejs supports Windows officially.  Just download it at http://nodejs.org and run the installer.
    * from `Nodejs.x86` startmenu, click  `nodejs command prompt`
    * try commands 
------------------------------
```
    node -v
    npm -v
```
    * You can use `npm` like it works in Linux/OSX.
      Install swixweb pre-required global modules by the following commands

``` bash
    npm install coffee-script -g
    npm install coffeecup -g
```
    * Please check above packages by the following commands

``` bash
   coffee -v
   coffeecup -v
```
    * You can install any nodejs module except native one(like `buffertools`).  
      Fortunately, swixweb doesn't depend on any native modules.
    * You can use `node/npm` commands on the previously installed `git-bash` prompt.

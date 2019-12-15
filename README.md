# IONIC_4-BaseProject
Development with different tools. Using Angular with IONIC 4


## INSTALL CAPACITOR

* 
    ```
    $ npm install --save @capacitor/core @capacitor/cli --save-exact
    ```

* 
    ```
    $ npm cap init
    ```

## Build
```
   $ ionic build
```
## Build Production
```
   $ ionic build --prod
```

## Add platform Android / IOS
```
   $ npx cap add android
```

## Open native code
```
   $ npx cap open android
```

## Update IOS & Android projects
```
    $ npx cap update

    $ npx cap sync

    $ npx cap copy
```
Before use this commands we need to run ``$ ionic build``.

## CREATE NEW PAGE
```
   $ ionic generate page intro
```

## INSTALL IONIC STORAGE
```
   $ npm install --save @ionic/storage --save-exact
```
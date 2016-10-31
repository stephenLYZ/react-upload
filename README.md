## React-upload

>Image upload and manipulation 

[demo](https://stephenlyao.github.io/react-upload/)   

![](https://res.cloudinary.com/stephenliu/image/upload/v1477922944/hfrztchcl6qafp0huzax.png)  

## Usage

First , you need  at least a free account  for [Cloudinary](http://cloudinary.com/) to get started. And change "Mode" to "Unsigned" like this:  
![](https://cdn.css-tricks.com/wp-content/uploads/2016/08/Unsigned.png)    

Next,clone this resposity:  

```
git clone https://github.com/stephenLYao/react-upload.git
cd react-upload
npm install
```

Then,edit the *upload.config.js*:  

```
module.exports = {
    'CLOUDINARY_UPLOAD_PRESET' : 'your preset id',
    'CLOUDINARY_UPLOAD_URL' : 'https://api.cloudinary.com/v1_1/your name/upload'
}
```

Finally, 

```
npm run start
```

Have fun!!:)
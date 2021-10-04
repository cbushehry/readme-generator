const generateReadMe = templateData => {

    
    const {gitHubUser, emailAddress, projectTitle, desc, webAddress,
        featuresGif, credits, licenses, commandInstall , commandTest, contrDesc, projects } = templateData;

     const genereateTips = tips => {
       

return `
${tips
.filter(({ addTip, addPicture }) => addTip && addPicture)
.map(({ addTip, addPicture }) => {
return `
###${addTip}
![${addPicture}](./assets/images/${addPicture}.JPG?raw=true "${addPicture}")
`;
})
.join('')}
${tips
.filter(({ addTip, addPicture }) => addTip && !addPicture)
.map(({ addTip }) => {
return `
${addTip}
`;
})
.join('')}
${tips
.filter(({ addTip, addPicture }) => !addTip && addPicture)
.map(({ addPicture }) => {
return `
![${addPicture}](./assets/images/${addPicture}.JPG?raw=true "${addPicture}")
`;
})
.join('')}
${tips
.filter(({ addTip, addPicture }) => !addTip && !addPicture)
.map(({ addTip,addPicture }) => {
})
.join('')}
`;
}         
    return `

## ${projectTitle}
1. [ Description. ](#desc)
2. [ Web Address. ](#web-address)
3. [ Usage tips. ](#usage)
4. [ Features. ](#features)
5. [ Credits. ](#credits)
6. [ Licenses. ](#licenses)
7. [ Install Command. ](#commandInstall)
8. [ Test Command. ](#commandTest)
9. [ Contributing. ](#contributing)
9. [ Questions. ](#questions)
### For license description, click on the badge to get more information.


${desc}
<a name="web-address"></a>
## 2. How to Get There
### Open your favorite web browser and enter the following web address to access.
${webAddress}
<a name="usage"></a>
## 3. Usage Tips
${genereateTips(projects)}
<a name="features"></a>
## 4. Features
![caption](./assets/images/${featuresGif}.gif)
<a name="credits"></a>
## 5. Credits
Licenses information: https://opensource.org/licenses/osl-3.0
Licenses badges contribution: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
${credits}
<a name="licenses"></a>
## 6. Licenses
${licenses.join(', ')}
<a name="commandInstall"></a>
## 7. Install Command
${commandInstall}
<a name="commandTest"></a>
## 8. Test Command
${commandTest}
<a name="contributing"></a>
## 9. Contributing
${contrDesc}
<a name="questions"></a>
## 10. Questions
Please reach out to me
GitHub Url: https://github.com/${gitHubUser}
Email address: ${emailAddress}
`;
};


module.exports = templateData => {
    //console.log(templateData);
    return generateReadMe(templateData);

    //console.log(github);
    //console.log(contrDesc);
    //const generateReadMe

}
// import postHtml from "npm:posthtml";
// import customElements  from 'npm:posthtml-custom-elements'


/**
 * @name iyoh service
 * This is a test function
 */

export default (props) => {
    console.log(props)  // even when i remove this there is still a console log in the browser.
    
    document.getElementById('name').innerHTML = props.onServerResult.name
   
}

export const onServer =  (path, req) => {
    
    console.log(path)
    return {name: 'Rawk'} // when i change the name i'm still getting Rawk?, I must be on the wrong file.
}


export const onBuild = async () => {

//    const postHtml =  await import(`npm:posthtml`);
//    const customElements =  await import(`npm:posthtml-custom-elements`);

   
//    const html = '<div>hello</div>'
//    const params  = {}
//    let res;
 
//    await postHtml()
//    .use(customElements())
//    .process(html).then((result) => res = result.html)


//     const sum = 1 + 1 + 1 + 1;
//     return {sum, res,params}
}



const APIKEY="05aed15670235acc953ccfcd7dc61442";
export const APIURL=`http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${APIKEY}&q=`;
export const iconImgSrc=(iconId)=>{
    return (`http://openweathermap.org/img/w/${iconId}.png`)
}
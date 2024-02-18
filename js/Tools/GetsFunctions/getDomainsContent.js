import getPeriod from "./getPeriod.js"

function getYDomain() {

    var circulos = document.querySelectorAll('.circulo');
    var yDomain = []
    const iconsDescription = [
        { content: "course_vis", icon: "fa-mouse-pointer", iconColor: "#8d6e63" },
        { content: "resource_vis", icon: "fa-folder-open", iconColor: "#e64a19" },
        { content: "forum_vis", icon: "fa-comments", iconColor: "#ff94c2" },
        { content: "forum_participation", icon: "fa-comment-medical", iconColor: "#00bcd4" },
        { content: "assignment_vis", icon: "fa-file-alt", iconColor: "#00897b" },
        { content: "assignment_try", icon: "fa-check", iconColor: "#819ca9" },
        { content: "assignment_sub", icon: "fa-check-double", iconColor: "#c0ca33" }
    ]
    circulos.forEach(function(circulo) {
        iconsDescription.forEach(currentIcon => {
            if(circulo.id == currentIcon.content){
                yDomain.push(currentIcon)
            }
        })
    });
    return yDomain
}

function getDomainsContent(activityData) {


    let domainsContent = {
        x: getPeriod(Number(activityData.t_open), Number(activityData.t_close)),
        y: getYDomain()
    }
    return domainsContent
}
export default getDomainsContent
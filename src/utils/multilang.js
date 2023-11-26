import languageConfig from "./lang.json";

const multilang = (keyword, placeholder, value ) => {

    const lang  =  localStorage.getItem("lang") || "en";

    const text = languageConfig[lang][keyword];

    if (placeholder && value) {
        return text.replace(placeholder, value);
    }
    return text;
}

export  default  multilang ;
let buttons = document.getElementsByTagName("button");
let _ = e => document.getElementById(e);
let input = _("input");
for(let i of buttons) i.onclick = () => input.value += i.id;
_("^").onclick = () => {
    let c = "^";
    let i = input.value[input.value.length-1];
    if(i !== "^"
    && i !== "."
    && i !== "("
    && i !== undefined
    && i !== "*"
    && i !== "/"
    && i !== "%"
    && i !== "+"
    && i !== "-") input.value += c;
};

_("*").onclick = () => {
    let c = "*";
    let i = input.value[input.value.length-1];
    if(i !== "^"
        && i !== undefined
        && i !== "*"
        && i !== "."
        && i !== "("
        && i !== "/"
        && i !== "%"
        && i !== "+"
        && i !== "-") input.value += c;
};
_("/").onclick = () => {
    let c = "/";
    let i = input.value[input.value.length-1];
    if(i !== "^"
        && i !== undefined
        && i !== "*"
        && i !== "."
        && i !== "("
        && i !== "/"
        && i !== "%"
        && i !== "+"
        && i !== "-") input.value += c;
};
_("%").onclick = () => {
    let c = "%";
    let i = input.value[input.value.length-1];
    if(i !== "^"
        && i !== undefined
        && i !== "*"
        && i !== "."
        && i !== "("
        && i !== "/"
        && i !== "%"
        && i !== "+"
        && i !== "-") input.value += c;
};
_("+").onclick = () => {
    let c = "+";
    let i = input.value[input.value.length-1];
    if(i !== "^"
        && i !== undefined
        && i !== "("
        && i !== "."
        && i !== "*"
        && i !== "/"
        && i !== "%"
        && i !== "+"
        && i !== "-") input.value += c;
};
_("-").onclick = () => {
    let c = "-";
    let i = input.value[input.value.length-1];
    if(i !== "^"
        && i !== undefined
        && i !== "."
        && i !== "("
        && i !== "*"
        && i !== "/"
        && i !== "%"
        && i !== "+"
        && i !== "-") input.value += c;
};
_(")").onclick = () => {
    let c = ")";
    let i = input.value[input.value.length-1];
    if(i !== "^"
        && i !== "."
        && i !== "*"
        && i !== "/"
        && i !== "%"
        && i !== "+"
        && i !== "-") input.value += c;
};
_(".").onclick = () => {
    let c = ".";
    let i = input.value[input.value.length-1];
    if(i !== "^"
        && i !== undefined
        && i !== "."
        && i !== "("
        && i !== "*"
        && i !== "/"
        && i !== "%"
        && i !== "+"
        && i !== "-") input.value += c;
};
_("(").onclick = () => {if(input.value[input.value.length-1] !== ".") input.value += "("};
_("<").onclick = () => input.value = input.value.slice(0, -1);
_("=").onclick = () => {try { input.value = calc.evaluate(input.value) } catch(e) {}}

let calc = new Calculator();
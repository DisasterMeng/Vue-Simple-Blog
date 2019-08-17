import { VueConstructor, VNodeComponentOptions, VNodeDirective, VNode } from 'vue'


import "spinkit/css/spinkit.css"
import './load.styl'

/** tool functions **/
function rotatingPlane() {
    let dom = document.createElement('div');
    dom.className = "sk-rotating-plane";
    return dom;
}

function doubleBounce() {
    let dom = document.createElement("div");
    dom.className = "sk-double-bounce";

    let innerDom1 = document.createElement("div");
    innerDom1.className = "sk-child sk-double-bounce1";
    let innerDom2 = document.createElement("div");
    innerDom2.className = "sk-child sk-double-bounce2";
    dom.appendChild(innerDom1);
    dom.appendChild(innerDom2);

    return dom;
}

function wave() {
    let dom = document.createElement("div");
    dom.className = "sk-wave";

    for (let i = 0; i < 4; i++) {
        let innerDom = document.createElement("div");
        innerDom.className = `sk-rect sk-rect${i + 1}`;
        dom.appendChild(innerDom);
    }
    return dom;
}

function wanderingCubes() {
    let dom = document.createElement("div");
    dom.className = "sk-wandering-cubes";

    for (let i = 0; i < 2; i++) {
        let innerDom = document.createElement("div");
        innerDom.className = `sk-cube sk-cube${i + 1}`;
        dom.appendChild(innerDom);
    }
    return dom;
}

function spinner() {
    let dom = document.createElement("div");
    dom.className = "sk-spinner sk-spinner-pulse";
    return dom;
}

function chasingDots() {
    let dom = document.createElement("div");
    dom.className = "sk-chasing-dots";

    for (let i = 0; i < 2; i++) {
        let innerDom = document.createElement("div");
        innerDom.className = `sk-child sk-dot${i + 1}`;
        dom.appendChild(innerDom);
    }
    return dom;
}

function threeBounce() {
    let dom = document.createElement("div");
    dom.className = "sk-three-bounce";

    for (let i = 0; i < 3; i++) {
        let innerDom = document.createElement("div");
        innerDom.className = `sk-child sk-bounce${i + 1}`;
        dom.appendChild(innerDom);
    }
    return dom;
}

function circle() {
    let dom = document.createElement("div");
    dom.className = "sk-circle";

    for (let i = 0; i < 12; i++) {
        let innerDom = document.createElement("div");
        innerDom.className = `sk-child sk-circle${i + 1}`;
        dom.appendChild(innerDom);
    }
    return dom;
}

function cubeGrid() {
    let dom = document.createElement("div");
    dom.className = "sk-cube-grid";

    for (let i = 0; i < 9; i++) {
        let innerDom = document.createElement("div");
        innerDom.className = `sk-cube sk-cube${i + 1}`;
        dom.appendChild(innerDom);
    }
    return dom;
}

function fadingCircle() {
    let dom = document.createElement("div");
    dom.className = "sk-fading-circle";

    for (let i = 0; i < 12; i++) {
        let innerDom = document.createElement("div");
        innerDom.className = `sk-circle sk-circle${i + 1}`;
        dom.appendChild(innerDom);
    }
    return dom;
}

function foldingCube() {
    let dom = document.createElement("div");
    dom.className = "sk-folding-cube";

    for (let i = 0; i < 4; i++) {
        let innerDom = document.createElement("div");
        innerDom.className = `sk-cube sk-cube${i + 1}`;
        dom.appendChild(innerDom);
    }
    return dom;
}


const loadConfig = [
    {
        name: "rotating-plane",
        func: rotatingPlane
    },
    {
        name: "double-bounce",
        func: doubleBounce
    },
    {
        name: "wave",
        func: wave
    },
    {
        name: "wandering-cubes",
        func: wanderingCubes
    },
    {
        name: "spinner",
        func: spinner
    },
    {
        name: "chasing-dots",
        func: chasingDots
    },
    {
        name: "three-bounce",
        func: threeBounce
    },
    {
        name: "circle",
        func: circle
    },
    {
        name: "cube-grid",
        func: cubeGrid
    },
    {
        name: "fading-circle",
        func: fadingCircle
    },
    {
        name: "folding-cube",
        func: foldingCube
    }
];

function insertLoading(el: HTMLElement, cover: HTMLElement) {
    let typeName = el.getAttribute('load-type') || "circle";
    loadConfig.some((v) => {
        if (v.name === typeName) {
            cover.appendChild(v.func());
            return;
        }
    });
}

function setBgColor(el: HTMLElement, cover: HTMLElement) {
    // set cover background
    let bgName = el.getAttribute('load-background');
    bgName && (cover.style.backgroundColor = bgName);
}




const easyLoading = {
    install: (Vue: VueConstructor, options: VNodeComponentOptions) => {
        Vue.directive('loading', {
            inserted(el: HTMLElement, binding: VNodeDirective, vnode: VNode) {
                el.className += ' loadParent'

                const cover:HTMLElement = document.createElement('div')
                cover.id = 'cover'
                cover.className = binding.value ? 'loadCover loadCoverShow' : 'loadCover'
                el.appendChild(cover)

                setBgColor(el, cover)
                insertLoading(el, cover)
            },
            update(el: HTMLElement, binding: VNodeDirective) {
                const cover: HTMLElement|null = el.querySelector('#cover')
                if(cover){
                    cover.innerHTML = ''
                    cover.className = binding.value ? 'loadCover loadCoverShow' : 'loadCover'
                    setBgColor(el, cover)
                    insertLoading(el, cover)
                }
            }
        })
    }
}



export default easyLoading
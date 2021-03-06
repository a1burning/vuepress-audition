function debounce(fn, timeout = 300) {
    let t;
    return (...args) => {
        if (t) {
            clearTimeout(t);
        }
        t = setTimeout(() => {
            fn.apply(fn, args);
        }, timeout);
    }
}

function memorize(fn) {
    const cache = new Map();
    return (name) => {
        if (!name) {
            container.innerHTML = '';
            return;
        }
        if (cache.get(name)) {
            container.innerHTML = cache.get(name);
            return;
        }
        const res = fn.call(fn, name).join('');
        cache.set(name, res);
        container.innerHTML = res;
    }
}

function handleInput(value) {
    const reg = new RegExp(`\(${value}\)`);
    const search = data.reduce((res, cur) => {
        if (reg.test(cur)) {
            const match = RegExp.$1;
            res.push(`<li>${cur.replace(match, '<bdi>$&</bdi>')}</li>`);
        }
        return res;
    }, []);
    return search;
}

const data = ["上海野生动物园", "上饶野生动物园", "北京巷子", " 上海中心", "上海黄埔江", "迪士尼上海", "陆家嘴上海中心"]
const container = document.querySelector('.container');
const memorizeInput = memorize(handleInput);
document.querySelector('.inp').addEventListener('input', debounce(e => {
    memorizeInput(e.target.value);
}))

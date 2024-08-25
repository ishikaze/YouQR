function refresh() {
    document.getElementById('form-hide-background-dots').click()
    document.getElementById('form-hide-background-dots').click()
}

function presetDefault() {
    document.getElementById('form-dots-type').value = 'square'
    document.getElementById('form-corners-square-type').value = 'square'
    document.getElementById('form-corners-dot-type').value = 'square'
    refresh()
}

function presetRounded() {
    document.getElementById('form-dots-type').value = 'rounded'
    document.getElementById('form-corners-square-type').value = 'extra-rounded'
    document.getElementById('form-corners-dot-type').value = 'dot'
    refresh()
}

function presetExtraRounded() {
    document.getElementById('form-dots-type').value = 'extra-rounded'
    document.getElementById('form-corners-square-type').value = 'extra-rounded'
    document.getElementById('form-corners-dot-type').value = 'dot'
    refresh()
}

function presetCircles() {
    document.getElementById('form-dots-type').value = 'dots'
    document.getElementById('form-corners-square-type').value = 'dot'
    document.getElementById('form-corners-dot-type').value = 'dot'
    refresh()
}

function presetClassy() {
    document.getElementById('form-dots-type').value = 'classy'
    document.getElementById('form-corners-square-type').value = 'extra-rounded'
    document.getElementById('form-corners-dot-type').value = 'dot'
    refresh()
}

function presetClassyRounded() {
    document.getElementById('form-dots-type').value = 'classy-rounded'
    document.getElementById('form-corners-square-type').value = 'extra-rounded'
    document.getElementById('form-corners-dot-type').value = 'dot'
    refresh()
}


document.getElementById('style-select').addEventListener('change', (e) => {
    let presetValue = e.target.value;
    switch(presetValue) {
        case 'default':
            presetDefault();
            break;
        case 'rounded':
            presetRounded();
            break;
        case 'extraRounded':
            presetExtraRounded();
            break;
        case 'circles':
            presetCircles();
            break;
        case 'classy':
            presetClassy();
            break;
        case 'classyRounded':
            presetClassyRounded();
            break;
    };
})

document.getElementById('qr-color').addEventListener('change', (e) => {
    let presetValue = e.target.value;
    document.getElementById('form-dots-color').value = presetValue
    document.getElementById('form-corners-square-color').value = presetValue
    document.getElementById('form-corners-dot-color').value = presetValue
    refresh()
})

document.getElementById('quick-background-color').addEventListener('change', (e) => {
    let presetValue = e.target.value;
    document.getElementById('form-background-color').value = presetValue
    refresh()
})

document.getElementById('presets-select').addEventListener('change', (e) => {
    let presetValue = e.target.value;
    switch(presetValue) {
        case 'default':
            document.getElementById('form-background-color').value = '#FFFFFF'
            document.getElementById('form-dots-color').value = '#000000'
            document.getElementById('form-corners-square-color').value = '#000000'
            document.getElementById('form-corners-dot-color').value = '#000000'
            refresh()
            document.getElementById('form-background-color-type-gradient').click()
            document.getElementById('form-background-color-type-single').click()
            break;
        case 'default-invert':
            document.getElementById('form-background-color').value = '#000000'
            document.getElementById('form-dots-color').value = '#FFFFFF'
            document.getElementById('form-corners-square-color').value = '#FFFFFF'
            document.getElementById('form-corners-dot-color').value = '#FFFFFF'
            refresh()
            document.getElementById('form-background-color-type-gradient').click()
            document.getElementById('form-background-color-type-single').click()
            break;
        case 'firery':
            document.getElementById('bg-gradient1').value = '#821131'
            document.getElementById('bg-gradient2').value = '#C7253E'
            document.getElementById('form-dots-color').value = '#FABC3F'
            document.getElementById('form-corners-square-color').value = '#FABC3F'
            document.getElementById('form-corners-dot-color').value = '#FABC3F'
            document.getElementById('form-background-gradient-rotation').value = '45'
            refresh()
            document.getElementById('form-background-color-type-single').click()
            document.getElementById('form-background-color-type-gradient').click()
            break;
        case 'purple':
            document.getElementById('bg-gradient1').value = '#2E073F'
            document.getElementById('bg-gradient2').value = '#7A1CAC'
            document.getElementById('form-dots-color').value = '#EBD3F8'
            document.getElementById('form-corners-square-color').value = '#EBD3F8'
            document.getElementById('form-corners-dot-color').value = '#EBD3F8'
            document.getElementById('form-background-gradient-rotation').value = '45'
            refresh()
            document.getElementById('form-background-color-type-single').click()
            document.getElementById('form-background-color-type-gradient').click()
            break;
        case 'sunset':
            document.getElementById('bg-gradient1').value = '#FB773C'
            document.getElementById('bg-gradient2').value = '#EB3678'
            document.getElementById('form-dots-color').value = '#180161'
            document.getElementById('form-corners-square-color').value = '#180161'
            document.getElementById('form-corners-dot-color').value = '#180161'
            document.getElementById('form-background-gradient-rotation').value = '270'
            refresh()
            document.getElementById('form-background-color-type-single').click()
            document.getElementById('form-background-color-type-gradient').click()
            break;
        case 'lemon':
            document.getElementById('bg-gradient1').value = '#F6E96B'
            document.getElementById('bg-gradient2').value = '#BEDC74'
            document.getElementById('form-dots-color').value = '#387F39'
            document.getElementById('form-corners-square-color').value = '#387F39'
            document.getElementById('form-corners-dot-color').value = '#387F39'
            document.getElementById('form-background-gradient-rotation').value = '45'
            refresh()
            document.getElementById('form-background-color-type-single').click()
            document.getElementById('form-background-color-type-gradient').click()
            break;
        case 'peach':
            document.getElementById('bg-gradient1').value = '#FF7777'
            document.getElementById('bg-gradient2').value = '#FFAAAA'
            document.getElementById('form-dots-color').value = '#287B5B'
            document.getElementById('form-corners-square-color').value = '#287B5B'
            document.getElementById('form-corners-dot-color').value = '#287B5B'
            document.getElementById('form-background-gradient-rotation').value = '45'
            refresh()
            document.getElementById('form-background-color-type-single').click()
            document.getElementById('form-background-color-type-gradient').click()
            break;
    };
    
})
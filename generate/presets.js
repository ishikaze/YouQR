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
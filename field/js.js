const canvas = document.getElementById("canvas")

let config = {
	width: null,
	height: null,
	rows: null,
	cols: null,
	margin: null
}

// add gutter and margin concept, more fun to maybe hit edge of canvas sometimes

let cellPositions = []

const imgList = [
	"av.jpg",
	"chart.png",
	"2012-12-28%2000.06.59.jpg",
	"2017-08-26%2015.07.17.jpg",
	"2017-06-23%2009.24.37.jpg",
	"2016-12-30%2022.02.49.jpg",
	"2016-12-30%2019.10.24-2.jpg",
	"2016-12-30%2017.58.28.jpg",
	"2016-12-30%2017.42.33-1.jpg",
	"2016-12-30%2012.59.14%20HDR.jpg",
	"2016-12-30%2012.32.37%20HDR.jpg"
]

const deepThoughts = [
	"I cannot read another piece of advice on Twitter",
	"This is just going to be what it is",
	"If I had a more comfortable chair, a well placed lamp, and better bookcases I'd read the books I haven't gotten to",
	"To everyone that offered to get me something while I've been sick — Thank you"
]

function newScreen() {
	// prepare
	ascertainWindowDimensions()
	newConfig()
	deriveCellPositions()
	// render
	setCanvasBackground()
	clearSomeCells()
	renderCells()
}

function ascertainWindowDimensions() {
	config.width = window.innerWidth
	config.height = window.innerHeight
}

function newConfig() {
	config.rows = 1 + Math.floor(Math.random() * 4)
	config.cols = 1 + Math.floor(Math.random() * 4)
	config.margin = Math.floor(Math.min(config.width, config.height) * (Math.random() * 0.2))
}

function deriveCellPositions() {
	const {width, height, rows, cols, margin} = config
	const cellWidth = Math.floor((width - cols * margin + margin) / cols)
	const cellHeight = Math.floor((height - rows * margin + margin) / rows)
	const newCellPositions = []
	for (let c = 0; c < cols; c++) {
		for (let r = 0; r < rows; r++) {
			newCellPositions.push({
				width: cellWidth,
				height: cellHeight,
				x: (c * cellWidth) + (c * margin),
				y: (r * cellHeight) + (r * margin)
			})
		}
	}
	cellPositions = newCellPositions
}

function setCanvasBackground() {
	canvas.setAttribute("style", `background-color: ${getShittyRandomColor()};`)
}

function renderCells() {
	cellPositions.map(cell => renderCell(cell.x, cell.y, cell.width, cell.height))
}

function getShittyRandomColor() {
	if (Math.random() > 0.25) {
		return "#" + (Math.random().toString(16) + "000000").slice(2, 8)
	} else {
		return "transparent"
	}
}

function renderCell(x, y, width, height) {
	const cell = document.createElement("div")
	let styles = `position: absolute; top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px;`
	let contents = null
	if (Math.random() > 0.1) {
		styles += getBgFillStyleForCell()
		if (Math.random() > 0.9) {
			contents = renderTextContents()
		}
	} else {
		if (Math.random() > 0.25) {
			styles += getImgStyleForCell()
		} else {
			styles += getBgGradientStyleForCell()
		}
	}
	cell.setAttribute("style",	styles)
	cell.setAttribute("class", "cell")
	if (contents) {
		cell.appendChild(contents)
	}
	canvas.appendChild(cell)
}

function getBgFillStyleForCell() {
	return `background-color: ${getShittyRandomColor()};`
}

function getBgGradientStyleForCell() {
	const angle = Math.floor(Math.random() * 360)
	return `background: linear-gradient(${angle}deg, ${getShittyRandomColor()}, ${getShittyRandomColor()})`
}

function getImgStyleForCell() {
	const imgUrl = imgList[Math.floor(Math.random() * imgList.length)]
	const size = Math.random() > 0.5 ? "cover" : "contain"
	const bgColor = Math.random() > 0.5 ? getBgFillStyleForCell() : ""
	const bgBlend = Math.random() > 0.5 ? "background-blend-mode: multiply;" : ""
	return `${bgColor} background-image: url(img/${imgUrl}); background-position: center center; background-size: ${size}; ${bgBlend}`
}

function renderTextContents() {
	const txt = deepThoughts[Math.floor(Math.random() * deepThoughts.length)]
	const textEl = document.createElement("span")
	textEl.setAttribute("class", "thought")
	textEl.textContent = txt
	return textEl
}

function clearSomeCells() {
	const allCells = canvas.getElementsByClassName("cell")
	const numCells = 1 + Math.floor(allCells.length * Math.random())
	if (allCells.length > 0) {
		for (let i = 0; i < numCells; i++) {
			allCells[Math.floor(allCells.length * Math.random())].remove()
		}
	}
}

newScreen()

window.addEventListener("click", newScreen)

// window.setInterval(newScreen, 5000)

// something async that starts loading random images in the background from some library
// then there's an an available library of images to select from for placement in cells
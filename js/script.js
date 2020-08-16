class ShuffleAndSort {
  constructor() {
    this.cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.renderGrid();
    document
      .getElementById('shuffle')
      .addEventListener('click', () => this.shuffle());
    document
      .getElementById('sort')
      .addEventListener('click', () => this.sort());
  }

  shuffle() {
    for (let i = this.cells.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      [this.cells[i], this.cells[random]] = [this.cells[random], this.cells[i]];
    }
    this.renderGrid();
  }

  sort() {
    if (this.cells.every((val, idx, arr) => !idx || arr[idx - 1] <= val)) {
      // To avoid unnecessary DOM render
      alert('Already sorted!');
    }
    this.cells = this.cells.sort();
    this.renderGrid();
  }

  renderGrid() {
    let gridCells = '';
    this.cells.forEach(
      (val, idx) =>
        (gridCells += `
                <div class="grid-cell bg${idx}">${val}</div>
            `),
    );
    document.getElementById('grid').innerHTML = gridCells;
  }
}

// Initialize this class
new ShuffleAndSort();

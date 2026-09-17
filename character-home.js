// 元のキャラクターの輪郭を測り、ページの下部中央に配置します。
function centerHomeCharacter() {
  document.querySelectorAll('[data-home-character]').forEach(character => {
    const svg = character.ownerSVGElement;
    const box = character.getBBox();
    const page = svg.viewBox.baseVal;
    // 元の大きさを維持し、左右の余白が同じになるよう移動します。
    const x = page.width / 2 - (box.x + box.width / 2);
    const y = page.height - 40 - (box.y + box.height);
    character.setAttribute('transform', `translate(${x} ${y})`);
    character.style.visibility = 'visible';
  });
}
centerHomeCharacter();
// フォント読込後に再計測し、文字の幅の違いによるずれを防ぎます。
document.fonts.ready.then(centerHomeCharacter);

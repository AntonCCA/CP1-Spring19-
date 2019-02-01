var bubbles = [];

function setup() {
    createCanvas(800, 800);

    for (var i = 0; i < 10; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(50, 50)
        };
        bubbles.push(bubble);
    }
}

function draw() {
    background(240);

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];
        // Nostroke
            if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
            if (mouseIsPressed) {
                bubbles.splice(i, 1); // remove this bubble!
            }
            fill(255, 100, 200, 200);
        } else {
            fill(25, 220, 225, 25);
        }

        ellipse(bubble.x, bubble.y, bubble.radius*2);
        bubble.x += random(-2, 2);
        bubble.y += random(-2, 2);
    }
}

</script>
</body>
</html>

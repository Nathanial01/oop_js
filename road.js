class Road {
    constructor(x, width, laneCount = 3) {
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;
        const infinity = 100000; // if it breaks, we're gonna use a large number for the road height
        this.top = -infinity;
        this.bottom = +infinity;
    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        // Draw each lane
        for (let i = 0; i <= this.laneCount; i++) {
            const x = this.left + (this.right - this.left) * (i / this.laneCount);
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
        }
    }
}

function lerp(A, B, t) {
    return A + (B - A) * t;  // t should be a fraction between 0 and 1
}

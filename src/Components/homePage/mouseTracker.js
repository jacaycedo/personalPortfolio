import React from "react";
class Particle{
  constructor(x,y)
  {
    this.x = x;
    this.y = y;
    this.size = Math.random() *5 + 1 ;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
   }
   update()
   {
     this.x += this.speedX;
     this.y += this.speedY;
   }

}
class Point {
  constructor(x, y, flip) {
    this.x = x;
    this.y = y;
    this.flip = flip;
    this.lifetime = 0;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }

  // Get the mid point between a & b
  static midPoint(a, b) {
    const mx = a.x + (b.x - a.x) * 0.5;
    const my = a.y + (b.y - a.y) * 0.5;

    return new Point(mx, my);
  }

  // Get the angle between a & b
  static angle(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.atan2(dy, dx);
  }

}

class Canvas extends React.Component {
  state = {
    cHeight: 0,
    cWidht: 0,
  };

  canvas = React.createRef();

  componentDidMount = () => {
    this.setState({
      cHeight: document.body.clientHeight,
      cWidth: document.body.clientWidth,
    });

    window.addEventListener(
      "resize",
      () => {
        this.setState({
          cHeight: document.body.clientHeight,
          cWidth: document.body.clientWidth,
        });
      },
      false
    );

    // If the device supports cursors, start animation.
    if (matchMedia("(pointer:fine)").matches) {
      this.startAnimation();
    }
  };

  startAnimation = () => {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');
    var flipNext = true;
    const points = [];

    const addPoint = (x, y) => {
      flipNext = !flipNext;
      const point = new Point(x, y, flipNext);
      points.push(point);
    };

    document.addEventListener('mousemove', ({ clientX, clientY }) => {
     
        addPoint(clientX - canvas.offsetLeft, clientY - canvas.offsetTop);
      
    }, false);

    const animatePoints = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const duration = (1 * 1000) / 60; 

      for (let i = 0; i < points.length; ++i) {
        const point = points[i];
        let lastPoint;

        if (points[i - 1] !== undefined) {
          lastPoint = points[i - 1];
        } else lastPoint = point;

        point.lifetime += 1;

        if (point.lifetime > duration) {
          // If the point dies, remove it.
          points.shift();
        } 
        else {
          // Otherwise animate it:

          // As the lifetime goes on, lifePercent goes from 0 to 1.
          const lifePercent = (point.lifetime / duration);
          const spreadRate = 7 * (1 - lifePercent);

          ctx.lineJoin = 'round';
          ctx.lineWidth = spreadRate;

          // As time increases decrease r and b, increase g to go from purple to green.
          const red = Math.floor(190 - (190 * lifePercent));
          const green = Math.floor(106 - (106 * lifePercent));
          const blue = Math.floor(223 + (223 * lifePercent));
          ctx.strokeStyle = `rgb(${red},${green},${blue}`;

          ctx.beginPath();

          var distance = Point.distance(lastPoint, point);
          var midpoint = Point.midPoint(lastPoint, point);
          var angle = Point.angle(lastPoint, point);
          //ctx.strokeStyle = `rgb(${0},${0},${0}`;
          ctx.arc(midpoint.x, midpoint.y, distance / 2, angle,( Math.PI+ angle), !point.flip);
          
          ctx.stroke();
          ctx.closePath();
          
          
          /* ctx.beginPath();
          ctx.arc(midpoint.x, midpoint.y, distance / 2, angle, (angle + Math.PI), point.flip);

          ctx.stroke();
          ctx.closePath(); */

        }
      }
      requestAnimationFrame(animatePoints);
    };

    animatePoints();
  }

  render = () => {
    const { cHeight, cWidth } = this.state;
    return <canvas ref={this.canvas} width={cWidth} height={cHeight} style={{zIndex:-1}} />;
  }
}

export default Canvas;









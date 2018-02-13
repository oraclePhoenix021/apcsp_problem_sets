/*
 * Hello.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello()
{
    var text = document.getElementById('canvas1').getContext('2d');
    text.font = '48px sans-serif';
    text.clearRect(0, 0, 1024, 128);
    text.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle()
{
    var rect = document.getElementById('canvas2').getContext('2d');
    var height = prompt("Height:");
    var width = prompt("Width:");
    var x = prompt("X:");
    var y = prompt("Y:");
    rect.clearRect(0, 0, 1024, 512);
    // if (width < 1 || height < 1 || x < 5 || y < 5 || width > 1024 || height > 512 || x > 1024 || y > 512){
    //     alert("Thou art an idiot.");
    //     return 0;
    // }
    if (width < 1){
        alert("Your width is too small.");
        return 0;
    }
    if (height < 1){
        alert("Your height is too small.");
        return 0;
    }
    if (x < 5){
        alert("Your x-coordinate is too small.");
        return 0;
    }
    if (y < 5){
        alert("Your y-coordinate is too small.");
        return 0;
    }
    if (width > 1024){
        alert("The rectangle will not fit on the canvas.");
        return 0;
    }
    if (height > 512){
        alert("The rectangle will not fit on the canvas.");
        return 0;
    }
    if (x > 1024){
        alert("The rectangle will not fit on the canvas.");
        return 0;
    }
    if (y > 512){
        alert("The rectangle will not fit on the canvas.");
        return 0;
    }
    rect.strokeRect(x, y, width, height);
}

/*
 * Color.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle()
{
    var color = prompt("Color:");
    var rect = document.getElementById('canvas3').getContext('2d');
    rect.clearRect(0, 0, 1024, 128);
    // rect.fillStyle = color;
    switch (color) {
        case 'black':
            rect.fillStyle = 'black';
            break;
        case 'blue':
            rect.fillStyle = 'blue';
            break;
        case 'green':
            rect.fillStyle = 'green';
            break;
        case 'orange':
            rect.fillStyle = 'orange';
            break;
        case 'purple':
            rect.fillStyle = 'purple';
            break;
        case 'red':
            rect.fillStyle = 'red';
            break;
        case 'yellow':
            rect.fillStyle = 'yellow';
            break;
        default:
            alert(color + " is not a supported color.");
            return 0;
    }
    rect.fillRect(10, 10, 100, 50);
    return 0;
}

/*
 * Triangle.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle()
{
    var s1 = parseFloat(prompt("Side 1:"));
    var s2 = parseFloat(prompt("Side 2:"));
    var s3 = parseFloat(prompt("Side 3:"));
    var trig = document.getElementById('canvas4').getContext('2d');
    trig.clearRect(0, 0, 1024, 512);
    if (Math.pow(s1, 2) + Math.pow(s2, 2) != Math.pow(s3, 2)){
        alert("That is not a valid right triangle.");
        return 0;
    }
    if (s1 > 502 || s2 > 1014){
        alert("The triangle will not fit on the canvas.");
        return 0;
    }
    trig.beginPath();
    trig.moveTo(10, 10);
    trig.lineTo(10, s1 + 10);
    trig.lineTo(s2 + 10, s1 + 10);
    trig.lineTo(10, 10);
    trig.stroke();
}

/*
 * Smile.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace()
{
    var smile = document.getElementById('canvas5').getContext('2d');
    smile.clearRect(0, 0, 1024, 512);
    var radius = parseFloat(prompt("Radius:"));
    if (radius > (512 / 2)){
        alert("The smiley face will not fit on the canvas.");
        return 0;
    }
    // smile.beginPath();
    // smile.arc(1024 / 2, 512 / 2, radius, 0, 360);
    // smile.arc(1024 / 4, 512 / 4, radius * 0.1, 0, 360);
    // smile.arc((1024 / 4) * 3, 512 / 4, radius * 0.1, 0, 360);
    // smile.arc(1024 /2, (512 / 4) * 3, radius * 0.7, 0, 180);
    smile.beginPath();
    smile.arc(radius, radius, radius, 0, Math.PI * 2);
    smile.moveTo((radius-(radius/2))+(radius*0.1), radius-(radius/2));
    smile.arc(radius-(radius/2), radius-(radius/2), radius * 0.1, 0, Math.PI * 2);
    smile.moveTo(radius+(radius/2)+(radius*0.1), radius-(radius/2));
    smile.arc(radius+(radius/2), radius-(radius/2), radius * 0.1, 0, Math.PI * 2);
    smile.moveTo(radius+(radius*0.7), (radius+(radius*0.1)));
    smile.arc(radius, (radius+(radius*0.1)), radius * 0.7, 0, Math.PI, false);
    smile.stroke();
    smile.endPath();
}

/*
 * Star.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar()
{
    var star = document.getElementById('canvas6').getContext('2d');
    star.clearRect(0, 0, 1024, 256);
    
    var rot = Math.PI / 2 * 3;
    var x = 125;
    var y = 125;
    var step = Math.PI / 5;
    var outerRadius = parseFloat(prompt("Outer Radius:"));
    var innerRadius = parseFloat(prompt("Inner Radius:"));
    
    if (innerRadius > outerRadius) {
        alert("Your outer radius must be larger than your inner radius.");
        return 0;
    }
    // if (outerRadius == 0 || outerRadius != true) {
    //     alert("Your outer radius is too small.");
    //     return 0;
    // }
    // if (innerRadius == 0 || innerRadius != true) {
    //     alert("Your inner radius is too small.");
    //     return 0;
    // }

    star.strokeSyle = "#000";
    star.beginPath();
    star.moveTo(125, 125 - outerRadius)
    for (var i = 0; i < 5; i++) {
        x = 125 + Math.cos(rot) * outerRadius;
        y = 125 + Math.sin(rot) * outerRadius;
        star.lineTo(x, y)
        rot += step

        x = 125 + Math.cos(rot) * innerRadius;
        y = 125 + Math.sin(rot) * innerRadius;
        star.lineTo(x, y)
        rot += step
    }
    star.lineTo(125, 125 - outerRadius)
    star.closePath();
    star.stroke();
}

/*
 * Stop Sign.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign()
{
    var stop = document.getElementById('canvas7').getContext('2d');
    stop.clearRect(0, 0, 1024, 256);
    var leg = 80 / Math.sqrt(2);
    stop.fillStyle = 'red';
    stop.beginPath();
    stop.moveTo(10, leg+90);
    stop.lineTo(10, leg+10);
    stop.lineTo(10+leg, 10);
    stop.lineTo(90+leg, 10);
    stop.lineTo(90+leg+leg, leg+10);
    stop.lineTo(90+leg+leg, leg+90);
    stop.lineTo(90+leg, 90+leg+leg);
    stop.lineTo(10+leg, 90+leg+leg);
    stop.closePath();
    stop.stroke();
    stop.strokeStyle = 'black';
    stop.fill();
    stop.fillStyle = 'white';
    stop.font = '65px sans-serif';
    stop.fillText('STOP', 20, leg+75, leg+leg+90);
}

/*
 * Pyramid.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid()
{
    var pyr = document.getElementById('canvas8').getContext('2d');
    pyr.clearRect(0, 0, 1024, 512);
    var length = parseFloat(prompt("Length:"));
    var x = 0;
    if (length * 5 > 512){
        alert("The pyramid will not fit on the canvas.");
        return 0;
    }
    for (var i = 0; i < 5; i++){
        pyr.strokeRect(x, 512 - length, length, length);
        x += length;
    }
    x = length / 2;
    for (var i = 0; i < 4; i++){
        pyr.strokeRect(x, 512 - length * 2, length, length);
        x += length;
    }
    x = length;
    for (var i = 0; i < 3; i++){
        pyr.strokeRect(x, 512 - length * 3, length, length);
        x += length;
    }
    x = length + length / 2;
    for (var i = 0; i < 2; i++){
        pyr.strokeRect(x, 512 - length * 4, length, length);
        x += length;
    }
    x = length * 2;
    pyr.strokeRect(x, 512 - length * 5, length, length);
}

/*
 * House.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse()
{
    var h = document.getElementById('canvas9').getContext('2d');
    var hcolor = prompt("House Color:");
    var dcolor = prompt("Front Door Color:");
    h.clearRect(0, 0, 1024, 760);
    switch (hcolor) {
        case 'blue':
            h.fillStyle = 'blue';
            break;
        case 'brown':
            h.fillStyle = 'brown';
            break;
        case 'green':
            h.fillStyle = 'green';
            break;
        case 'orange':
            h.fillStyle = 'orange';
            break;
        case 'purple':
            h.fillStyle = 'purple';
            break;
        case 'red':
            h.fillStyle = 'red';
            break;
        case 'yellow':
            h.fillStyle = 'yellow';
            break;
        default:
            alert("One of your colors is not supported.");
            return 0;
    }
    h.fillRect(150, 270, 725, 480);
    h.strokeRect(150, 270, 725, 480);
    switch (dcolor) {
        case 'blue':
            h.fillStyle = 'blue';
            break;
        case 'brown':
            h.fillStyle = 'brown';
            break;
        case 'green':
            h.fillStyle = 'green';
            break;
        case 'orange':
            h.fillStyle = 'orange';
            break;
        case 'purple':
            h.fillStyle = 'purple';
            break;
        case 'red':
            h.fillStyle = 'red';
            break;
        case 'yellow':
            h.fillStyle = 'yellow';
            break;
        default:
            alert("One of your colors is not supported.");
            return 0;
    }
    h.fillRect(437.5, 550, 100, 200);
    h.strokeRect(437.5, 550, 100, 200);
    h.fillStyle = 'lightblue';
    h.fillRect(281.25, 600, 100, 100);
    h.fillRect(593.75, 600, 100, 100);
    h.strokeRect(281.25, 600, 100, 100);
    h.strokeRect(593.75, 600, 100, 100);
    h.fillRect(281.25, 400, 100, 100);
    h.fillRect(593.75, 400, 100, 100);
    h.strokeRect(281.25, 400, 100, 100);
    h.strokeRect(593.75, 400, 100, 100);
    h.fillStyle = 'yellow';
    h.moveTo(525, 650);
    h.arc(520, 650, 5, 0, Math.PI * 2);
    h.fill();
    h.stroke();
    h.beginPath();
    h.fillStyle = 'grey';
    h.moveTo(150, 270);
    h.lineTo(487.5, 0);
    h.lineTo(875, 270);
    h.closePath();
    h.fill();
    h.stroke();
    h.endPath();
}

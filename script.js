document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();
  const { Engine, Body, Composite, Bodies, Runner, Render } = Matter;
  const engine = Engine.create();
  const runner = Runner.create();
  const world = engine.world;

  const boxA = Bodies.rectangle(200, 200, 100, 100);
  const boxB = Bodies.rectangle(400, 200, 100, 100);
  const boxC = Bodies.rectangle(600, 200, 100, 100);

  const ground = Bodies.rectangle(rect.width / 2, rect.height, rect.width, 1, {
    isStatic: true,
  });
  const wallLeft = Bodies.rectangle(0, rect.height / 2, 1, rect.height, {
    isStatic: true,
  });

  const circleA = Bodies.circle(600, 100, 30);

  const wallRight = Bodies.rectangle(
    rect.width,
    rect.height / 2,
    1,
    rect.height,
    {
      isStatic: true,
    }
  );

  const render = Render.create({
    element: container,
    engine: engine,
    options: {
      width: rect.width,
      height: rect.height,
      background: "#1c1c1c",
      wireframes: false,
    },
  });

  Composite.add(world, [boxA, boxB, boxC, ground, wallLeft, wallRight]);

  Render.run(render);
  Runner.run(runner, engine);
});

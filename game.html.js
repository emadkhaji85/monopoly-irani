export default `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>مونوپولی ایرانی</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Lalezar&family=Vazirmatn:wght@400;600;800&display=swap" rel="stylesheet">
<style>
@property --cam{syntax:'<angle>';inherits:true;initial-value:0deg}
@property --tilt{syntax:'<angle>';inherits:true;initial-value:54deg}
:root{
  --ink:oklch(25% 0.03 30);--ink-2:oklch(45% 0.03 35);--ink-3:oklch(62% 0.025 40);
  --cream:oklch(96% 0.022 82);--cream-2:oklch(91% 0.035 80);--cream-3:oklch(84% 0.045 75);
  --line:oklch(74% 0.04 60);
  --felt:oklch(36% 0.08 14);--felt-d:oklch(21% 0.05 14);
  --wood:oklch(55% 0.085 58);--wood-d:oklch(38% 0.07 50);
  --gold:oklch(80% 0.13 82);--gold-d:oklch(58% 0.11 70);
  --red:oklch(58% 0.2 27);--red-d:oklch(42% 0.16 27);
  --blue:oklch(56% 0.15 252);--blue-d:oklch(40% 0.13 255);
  --green:oklch(63% 0.15 150);--green-d:oklch(45% 0.12 152);
  --yellow:oklch(86% 0.15 92);--yellow-d:oklch(66% 0.13 80);
  --pos:oklch(52% 0.14 150);--neg:oklch(55% 0.19 27);
  --ease:cubic-bezier(.22,1,.36,1);--ease-io:cubic-bezier(.65,0,.35,1);
  --z-hud:10;--z-panel:20;--z-ov:40;--z-toast:50;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;overflow:hidden;background:var(--felt-d);color:var(--ink);font-family:Vazirmatn,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
button{font:inherit;color:inherit;border:0;background:none;cursor:pointer}
button:focus-visible,input:focus-visible{outline:3px solid var(--gold);outline-offset:3px}
button:disabled{cursor:not-allowed;opacity:.45}
[hidden]{display:none!important}
.screen{position:fixed;inset:0;opacity:0;pointer-events:none;transition:opacity 700ms var(--ease)}
.screen.active{opacity:1;pointer-events:auto}

/* ============ MENU ROOM ============ */
.room{position:absolute;inset:0;overflow:hidden;transform-origin:30% 62%;
  background:radial-gradient(ellipse 60% 55% at 82% 8%,oklch(90% 0.07 75),transparent 70%),
  repeating-linear-gradient(90deg,oklch(80% 0.055 55) 0 38px,oklch(78% 0.06 52) 38px 76px);}
.room.dive{animation:dive 3.6s var(--ease-io) forwards}
@keyframes dive{0%{transform:none}45%{transform:translate(3%,-3%) scale(1.55) rotate(-2.5deg)}100%{transform:translate(0,-6%) scale(4.2) rotate(0)}}
.veil{position:absolute;inset:0;background:var(--felt-d);opacity:0;pointer-events:none;transition:opacity 1.4s var(--ease-io) 2.1s}
.veil.on{opacity:1}
.bokeh{position:absolute;inset:0;filter:blur(5px)}
.window{position:absolute;left:6%;top:7%;width:22%;height:34%;border-radius:10px 10px 4px 4px;overflow:hidden;
  background:linear-gradient(oklch(38% 0.07 265),oklch(55% 0.08 300));box-shadow:0 0 0 14px oklch(92% 0.02 80),0 0 0 16px oklch(70% 0.04 60)}
.window::before{content:"";position:absolute;inset:-50% 0 0;background:repeating-linear-gradient(100deg,transparent 0 22px,oklch(85% 0.03 250 / .35) 22px 23px);animation:rain 0.7s linear infinite}
.window::after{content:"";position:absolute;left:50%;top:0;bottom:0;width:10px;margin-left:-5px;background:oklch(92% 0.02 80);box-shadow:0 0 0 0 transparent}
@keyframes rain{to{transform:translateY(33%)}}
.lights{position:absolute;left:0;right:0;top:3%;height:40px}
.lights i{position:absolute;width:10px;height:10px;border-radius:50%;background:var(--c);box-shadow:0 0 18px 6px var(--c);animation:twinkle 3s ease-in-out infinite;animation-delay:var(--d)}
@keyframes twinkle{50%{opacity:.45}}
.shelf{position:absolute;right:4%;top:34%;width:40%;height:12px;background:var(--wood-d);border-radius:3px;box-shadow:0 10px 20px oklch(30% 0.04 40 / .3)}
.bear{position:absolute;right:30%;top:calc(34% - 96px);width:80px;height:96px}
.bear::before{content:"";position:absolute;left:12px;top:0;width:56px;height:52px;border-radius:50%;background:oklch(58% 0.08 55);box-shadow:-20px -10px 0 -12px oklch(58% 0.08 55),20px -10px 0 -12px oklch(58% 0.08 55)}
.bear::after{content:"";position:absolute;left:4px;bottom:0;width:72px;height:56px;border-radius:45% 45% 30% 30%;background:oklch(54% 0.08 52)}
.rocket{position:absolute;right:12%;top:calc(34% - 110px);width:34px;height:110px;border-radius:50% 50% 8px 8px;background:linear-gradient(90deg,oklch(94% 0.01 80),oklch(80% 0.02 80));box-shadow:inset 0 30px 0 -8px var(--red)}
.blocks{position:absolute;right:20%;top:calc(34% - 58px);display:flex;gap:4px;align-items:flex-end}
.blocks b{display:grid;place-items:center;width:40px;height:40px;font:44px/1 Lalezar;color:oklch(97% 0.01 80);border-radius:4px;background:var(--c)}
.blocks b:nth-child(2){transform:translateY(-44px) rotate(-8deg)}
.desk{position:absolute;left:-15%;right:-15%;bottom:-6%;height:52%;transform:perspective(900px) rotateX(40deg);transform-origin:50% 100%;
  background:linear-gradient(oklch(62% 0.09 58),oklch(48% 0.085 52)),repeating-linear-gradient(90deg,transparent 0 60px,oklch(40% 0.07 50 / .25) 60px 62px);
  background-blend-mode:multiply;box-shadow:0 -3px 0 oklch(72% 0.08 65)}
.box-wrap{position:absolute;left:30%;top:64%;transform:translate(-50%,-50%);perspective:1000px}
.box{position:relative;width:360px;height:240px;transform:rotateX(56deg) rotateZ(-14deg);transform-style:preserve-3d}
.box::before{content:"";position:absolute;inset:10px;background:oklch(25% 0.05 40 / .55);filter:blur(22px);transform:translate(18px,26px)}
.lid{position:absolute;inset:0;transform:translateZ(46px);border-radius:6px;background:var(--red);padding:14px;overflow:hidden;
  box-shadow:inset 0 0 0 2px oklch(70% 0.16 30),inset 0 -10px 30px oklch(35% 0.14 27 / .6)}
.lid::after{content:"";position:absolute;inset:-40%;background:linear-gradient(115deg,transparent 42%,oklch(98% 0.03 80 / .45) 50%,transparent 58%);animation:sheen 5s var(--ease-io) infinite}
@keyframes sheen{0%,55%{transform:translateX(-60%)}100%{transform:translateX(60%)}}
.lid-inner{height:100%;border-radius:4px;background:var(--cream);display:grid;place-items:center;align-content:center;gap:2px;border:3px solid var(--gold)}
.brand{font:74px/1 Lalezar;color:var(--red);text-shadow:0 2px 0 oklch(35% 0.14 27),0 4px 0 oklch(30% 0.1 27 / .35)}
.sub{font-weight:800;font-size:14px;letter-spacing:.02em;color:var(--ink-2)}
.side{position:absolute;background:var(--red-d)}
.s-front{left:0;top:240px;width:360px;height:46px;transform-origin:top;transform:rotateX(90deg);background:linear-gradient(oklch(36% 0.14 27),var(--red-d))}
.s-right{left:360px;top:0;width:46px;height:240px;transform-origin:left;transform:rotateY(-90deg);background:oklch(34% 0.13 27)}

.menu-panel{position:absolute;right:6vw;top:50%;transform:translateY(-50%);width:min(360px,88vw);display:flex;flex-direction:column;gap:14px;transition:opacity 400ms var(--ease),transform 500ms var(--ease)}
.menu-panel.out{opacity:0;transform:translateY(-50%) translateX(30px);pointer-events:none}
.eyebrow{font-size:.8rem;font-weight:800;letter-spacing:.08em;color:oklch(35% 0.06 40);margin-bottom:4px}
.mbtn{--bc:var(--red);--bd:var(--red-d);--fg:oklch(98% 0.01 80);display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:18px;background:var(--bc);color:var(--fg);
  box-shadow:0 6px 0 var(--bd),0 14px 24px oklch(30% 0.06 40 / .25),inset 0 2px 0 oklch(100% 0 0 / .25);text-align:start;transition:transform 120ms var(--ease),box-shadow 120ms var(--ease)}
.mbtn:hover{transform:translateY(-2px);box-shadow:0 8px 0 var(--bd),0 18px 28px oklch(30% 0.06 40 / .28),inset 0 2px 0 oklch(100% 0 0 / .25)}
.mbtn:active{transform:translateY(5px);box-shadow:0 1px 0 var(--bd),0 4px 8px oklch(30% 0.06 40 / .2)}
.mbtn .ic{display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:oklch(100% 0 0 / .18);font-size:22px;flex:none}
.mbtn b{display:block;font-size:1.2rem;font-weight:800}
.mbtn small{display:block;font-size:.75rem;opacity:.8;letter-spacing:.06em;text-align:start}
.mbtn.blue{--bc:var(--blue);--bd:var(--blue-d)}
.mbtn.green{--bc:var(--green);--bd:var(--green-d)}
.mbtn.yellow{--bc:var(--yellow);--bd:var(--yellow-d);--fg:var(--ink)}
.sheet{background:var(--cream);border-radius:20px;padding:20px;box-shadow:0 20px 50px oklch(25% 0.05 40 / .35);max-height:84vh;overflow:auto;gap:16px;display:flex;flex-direction:column}
.sheet h2{font:32px/1 Lalezar;color:var(--ink)}
.field{display:grid;gap:6px}
.field label,.field .lbl{font-weight:600;font-size:.9rem;display:flex;justify-content:space-between;gap:8px}
.field output{font-weight:800;color:var(--red);font-variant-numeric:tabular-nums}
input[type=range]{width:100%;accent-color:var(--red)}
input[type=text]{width:100%;padding:10px 12px;border-radius:10px;border:1.5px solid var(--cream-3);background:oklch(99% 0.008 80);font:inherit}
.stepper{display:flex;align-items:center;gap:10px}
.stepper button{width:40px;height:40px;border-radius:12px;background:var(--cream-2);font-size:20px;font-weight:800}
.stepper span{font-size:1.4rem;font-weight:800;min-width:2ch;text-align:center}
.switch{display:flex;justify-content:space-between;align-items:center;gap:12px;font-weight:600;font-size:.9rem}
.switch input{appearance:none;flex:none;width:46px;height:26px;border-radius:13px;background:var(--cream-3);position:relative;cursor:pointer;transition:background 200ms}
.switch input::after{content:"";position:absolute;top:3px;right:3px;width:20px;height:20px;border-radius:50%;background:oklch(99% 0.005 80);transition:transform 250ms var(--ease)}
.switch input:checked{background:var(--green)}
.switch input:checked::after{transform:translateX(-20px)}
.icons{display:flex;gap:8px}
.icons button{flex:1;height:48px;border-radius:12px;background:var(--cream-2);font-size:22px;border:2px solid transparent}
.icons button[aria-pressed=true]{border-color:var(--red);background:oklch(93% 0.05 30)}
.row{display:flex;gap:10px}
.pill{padding:10px 16px;border-radius:12px;background:var(--ink);color:var(--cream);font-weight:800}
.pill.ghost{background:var(--cream-2);color:var(--ink)}
.code{font:800 1.5rem/1 Vazirmatn;letter-spacing:.1em;direction:ltr;text-align:center;padding:14px;border-radius:12px;background:var(--cream-2);border:2px dashed var(--cream-3)}
.hint{font-size:.85rem;color:var(--ink-2);line-height:1.7}
.friend{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--cream-2)}
.friend .av{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;font-weight:800;color:var(--cream);background:var(--c)}
.friend div{flex:1}
.friend small{display:block;color:var(--ink-3)}

/* ============ GAME STAGE ============ */
#game{background:radial-gradient(ellipse 70% 60% at 50% 48%,oklch(42% 0.09 16),var(--felt) 45%,var(--felt-d) 100%)}
.stage{position:absolute;inset:0;perspective:1700px;perspective-origin:50% 42%;overflow:hidden;touch-action:none}
.shake{position:absolute;left:50%;top:53%;transform-style:preserve-3d}
.shake.go{animation:shake 420ms linear}
@keyframes shake{20%{transform:translate(3px,-2px)}40%{transform:translate(-3px,2px)}60%{transform:translate(2px,1px)}80%{transform:translate(-1px,-1px)}}
.cam{transform-style:preserve-3d;transition:transform 800ms var(--ease)}
.board{position:absolute;left:calc(var(--B) / -2);top:calc(var(--B) / -2);width:var(--B);height:var(--B);transform-style:preserve-3d;
  transform:rotateX(var(--tilt)) rotateZ(var(--cam));transition:--cam 950ms var(--ease-io),--tilt 2200ms var(--ease)}
.board.intro{--tilt:78deg}
.board-shadow{position:absolute;inset:20px;background:oklch(12% 0.03 14 / .7);filter:blur(28px);transform:translateZ(-18px)}
.edge{position:absolute;inset:0;transform:rotateZ(calc(var(--k)*90deg));transform-style:preserve-3d;pointer-events:none}
.edge i{position:absolute;left:0;top:var(--B);width:var(--B);height:16px;transform-origin:top;transform:rotateX(-90deg);background:linear-gradient(var(--wood),var(--wood-d))}
.face{position:absolute;inset:0;border-radius:4px;background:var(--cream);box-shadow:inset 0 0 0 5px var(--wood-d);overflow:hidden;transition:filter 1.8s var(--ease)}
.board.intro .face{filter:brightness(.35) saturate(.6)}
.face::after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 50% 50%,oklch(100% 0.02 85 / .18),transparent 60%)}
.tile{position:absolute;background:var(--cream);border:1px solid var(--line);display:flex;flex-direction:column;align-items:center;text-align:center;cursor:pointer;transition:background 200ms}
.tile:hover{background:oklch(98% 0.03 85)}
.tile.land{animation:land 900ms var(--ease)}
@keyframes land{0%{background:oklch(92% 0.1 85)}100%{background:var(--cream)}}
.tile.swap{animation:swap 1s var(--ease) 2}
@keyframes swap{50%{background:oklch(88% 0.1 150)}}
.band{width:100%;height:22px;background:var(--gc);border-bottom:1px solid var(--line);flex:none}
.t-ico{font-size:17px;margin-top:6px;line-height:1}
.t-name{font-weight:800;font-size:11.5px;line-height:1.22;margin-top:4px;padding:0 3px;overflow-wrap:anywhere}
.t-price{font-size:10.5px;color:var(--ink-2);margin-top:auto;margin-bottom:12px;font-variant-numeric:tabular-nums}
.own{position:absolute;bottom:4px;left:20%;right:20%;height:5px;border-radius:3px;background:var(--oc);display:none;box-shadow:0 0 0 1px oklch(30% 0.03 30 / .25)}
.tile[data-owner] .own{display:block}
.tile.sp{justify-content:center;gap:4px}
.tile .t-big{font-size:28px;line-height:1}
.tile.corner{justify-content:center;gap:4px;background:var(--cream-2)}
.tile.corner .t-big{font-size:38px}
.tile.corner .t-name{font-size:14px}
.t-sub{font-size:11px;color:var(--pos);font-weight:800}
.center{position:absolute;inset:var(--C);pointer-events:none}
.logo{position:absolute;top:70px;left:0;right:0;text-align:center;font:92px/1 Lalezar;color:var(--red);transform:rotate(0);text-shadow:0 3px 0 oklch(80% 0.06 40)}
.logo small{display:block;font:800 16px/1.8 Vazirmatn;color:var(--ink-2);letter-spacing:.04em}
.deck{position:absolute;width:150px;height:96px;border-radius:8px;display:grid;place-items:center;font:22px Lalezar;color:oklch(97% 0.01 80);box-shadow:3px 3px 0 oklch(80% 0.03 70),6px 6px 0 oklch(74% 0.04 70)}
.deck.chance{background:oklch(70% 0.16 55);left:90px;bottom:110px;transform:rotate(-24deg)}
.deck.chest{background:oklch(58% 0.12 240);right:90px;bottom:110px;transform:rotate(24deg)}
.bowl{position:absolute;left:calc(var(--B) / 2 - 120px);top:calc(var(--B) / 2 - 110px);width:240px;height:240px;border-radius:50%;
  background:radial-gradient(circle at 50% 42%,oklch(47% 0.1 38) 0 56%,oklch(34% 0.08 35) 70%,oklch(58% 0.09 58) 72.5%,oklch(44% 0.08 52) 86%,oklch(33% 0.06 48) 100%);
  box-shadow:0 10px 24px oklch(20% 0.04 30 / .45),inset 0 0 0 2px oklch(66% 0.08 62)}
.layer{position:absolute;inset:0;transform-style:preserve-3d;pointer-events:none}
.bb{position:absolute;left:0;top:0;transform-style:preserve-3d;transition:transform 250ms var(--ease)}
.bb-rot{position:absolute;left:0;top:0;transform-origin:50% 100%;transform:translate(-50%,-100%) rotateZ(calc(var(--cam) * -1)) rotateX(-90deg)}
.shadow{position:absolute;width:26px;height:10px;left:-13px;top:-5px;border-radius:50%;background:radial-gradient(oklch(20% 0.03 30 / .45),transparent 70%);transform:translateZ(.5px)}
/* glass tombstone */
.stone{--pc:red;position:relative;width:26px;height:36px;border-radius:13px 13px 3px 3px;
  background:linear-gradient(100deg,color-mix(in oklch,var(--pc) 78%,transparent) 0%,color-mix(in oklch,var(--pc) 34%,transparent) 42%,color-mix(in oklch,var(--pc) 55%,transparent) 70%,color-mix(in oklch,var(--pc) 88%,transparent) 100%);
  box-shadow:inset 0 0 0 1px color-mix(in oklch,oklch(99% 0.01 90) 60%,transparent),inset 3px 2px 4px color-mix(in oklch,oklch(99% 0.01 90) 55%,transparent),inset -4px -3px 7px color-mix(in oklch,var(--pc) 70%,oklch(15% 0.02 30)),0 0 14px color-mix(in oklch,var(--pc) 45%,transparent);
  display:grid;place-items:center;padding-top:4px}
.stone::before{content:"";position:absolute;left:5px;top:5px;width:3px;height:22px;border-radius:2px;background:linear-gradient(oklch(99% 0.01 90 / .95),transparent)}
.stone::after{content:"";position:absolute;left:-3px;right:-3px;bottom:-4px;height:5px;border-radius:2px;background:color-mix(in oklch,var(--pc) 70%,oklch(30% 0.02 30));opacity:.9}
.stone i{font-style:normal;font-size:13px;filter:grayscale(1) contrast(.7) brightness(1.5);opacity:.8;text-shadow:0 1px 0 oklch(99% 0.01 90 / .7),0 -1px 0 oklch(20% 0.02 30 / .35)}
.stone.white{--pc:oklch(97% 0.01 90)}
.tok.turn .stone{box-shadow:inset 0 0 0 1px color-mix(in oklch,oklch(99% 0.01 90) 60%,transparent),inset 3px 2px 4px color-mix(in oklch,oklch(99% 0.01 90) 55%,transparent),0 0 0 2px var(--gold),0 0 22px var(--gold)}
/* lego buildings */
.house{position:relative;width:22px;height:25px}
.house i{position:absolute;display:block}
.house .hb{left:2px;right:3px;bottom:0;height:16px;border-radius:1.5px;background:linear-gradient(90deg,oklch(73% 0.16 145),oklch(59% 0.16 146) 62%,oklch(50% 0.14 148));box-shadow:inset 0 2px 2px oklch(100% 0 0 / .35),inset 0 -3px 3px oklch(20% 0.05 145 / .5)}
.house .hs{right:-1px;bottom:0;width:4px;height:16px;background:oklch(42% 0.12 148);transform:skewY(-20deg);transform-origin:top left;border-radius:0 1px 1px 0}
.house .hr{left:0;top:0;width:19px;height:10px;background:linear-gradient(180deg,oklch(62% 0.18 32),oklch(47% 0.16 30));clip-path:polygon(50% 0,100% 100%,0 100%);filter:drop-shadow(0 1px 1px oklch(20% 0.05 30 / .6))}
.house .hr::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(105deg,oklch(100% 0 0 / .22) 0 2px,transparent 2px 4.5px)}
.house .hd{left:5px;bottom:0;width:4px;height:8px;border-radius:1px 1px 0 0;background:oklch(33% 0.08 55);box-shadow:inset 0 1px 1px oklch(0% 0 0 / .6)}
.house .hw{bottom:7px;width:3.5px;height:3.5px;border-radius:.5px;background:linear-gradient(180deg,oklch(95% 0.09 95),oklch(82% 0.15 90));box-shadow:0 0 3px oklch(85% 0.15 90 / .8)}
.house .w1{right:6px}.house .w2{right:11px}
.drop{animation:drop .8s cubic-bezier(.3,1.25,.4,1) both}
@keyframes drop{0%{transform:translateY(-150px) scale(.6);opacity:0}55%{transform:translateY(6px) scale(1.04);opacity:1}72%{transform:translateY(-3px) scale(1)}88%{transform:translateY(1.5px)}100%{transform:none;opacity:1}}
.dust{position:absolute;left:0;top:0;width:30px;height:9px;margin:-4px 0 0 -15px;border-radius:50%;background:radial-gradient(oklch(98% 0.02 85 / .85),oklch(98% 0.02 85 / 0) 70%);animation:dustp .55s ease-out .42s both;pointer-events:none}
@keyframes dustp{0%{transform:scale(.3);opacity:.95}100%{transform:scale(1.9);opacity:0}}
.facpulse{animation:facpulse .65s ease}
@keyframes facpulse{0%{filter:brightness(2.3) drop-shadow(0 0 9px oklch(85% 0.15 90))}100%{filter:none}}
.grow{animation:grow 600ms var(--ease) both;transform-origin:50% 100%}
@keyframes grow{0%{transform:scale(0,0);opacity:0}60%{transform:scale(1.1,1.15);opacity:1}100%{transform:scale(1)}}
.dissolve{animation:dissolve 700ms var(--ease-io) forwards}
@keyframes dissolve{to{opacity:0;filter:blur(3px);transform:translateY(-8px) scale(1.3)}}
.factory{position:relative;width:34px;height:30px}
.f-body{position:absolute;left:0;right:0;bottom:0;height:22px;background:linear-gradient(90deg,oklch(68% 0.17 145),oklch(52% 0.15 148));clip-path:polygon(0 35%,33% 0,33% 35%,66% 0,66% 35%,100% 35%,100% 100%,0 100%)}
.f-chim{position:absolute;right:3px;bottom:14px;width:6px;height:16px;background:oklch(48% 0.13 148)}
.f-gear{position:absolute;left:5px;bottom:2px;font-size:12px;line-height:1;color:oklch(92% 0.05 140);animation:spin 3s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.smoke{position:absolute;right:1px;bottom:28px;width:9px;height:9px;border-radius:50%;background:oklch(94% 0.01 90 / .8);animation:smoke 2.4s ease-out infinite}
.smoke:nth-child(5){animation-delay:1.2s}
@keyframes smoke{0%{transform:translate(0,0) scale(.4);opacity:.9}100%{transform:translate(-8px,-26px) scale(1.6);opacity:0}}
/* dice */
.die{position:absolute;left:0;top:0;transform-style:preserve-3d}
.cube{position:absolute;left:-17px;top:-17px;width:34px;height:34px;transform-style:preserve-3d}
.fc{position:absolute;inset:0;border-radius:6px;background:oklch(97% 0.012 85);box-shadow:inset 0 0 0 1px oklch(85% 0.03 70),inset 0 0 6px oklch(80% 0.03 70);display:grid;grid-template:repeat(3,1fr)/repeat(3,1fr);padding:5px;backface-visibility:hidden}
.fc span{width:6px;height:6px;border-radius:50%;background:var(--ink);place-self:center}
.fc[data-v="1"] span,.fc[data-v="5"] span:nth-child(5){background:var(--red)}
.fc.top{box-shadow:inset 0 0 0 2px var(--gold),0 0 20px var(--gold)}

/* ============ HUD ============ */
.hud-top{position:absolute;top:12px;left:12px;right:12px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px;z-index:var(--z-hud);pointer-events:none}
.hud-top>*{pointer-events:auto}
.iconbtn{height:44px;padding:0 14px;border-radius:14px;background:oklch(28% 0.05 18);color:var(--cream);font-weight:800;display:flex;align-items:center;gap:8px;box-shadow:inset 0 0 0 1px oklch(45% 0.06 20)}
.iconbtn:hover{background:oklch(33% 0.06 18)}
.year{display:flex;align-items:center;gap:12px;padding:8px 14px 8px 18px;border-radius:18px;background:oklch(26% 0.05 18);box-shadow:inset 0 0 0 1.5px var(--gold-d),0 10px 30px oklch(12% 0.03 14 / .5)}
.cal{position:relative;width:74px;height:54px;perspective:300px}
.cal-page{position:absolute;inset:0;border-radius:8px;background:var(--cream);display:grid;place-items:center;font:30px/1 Lalezar;color:var(--red);padding-top:8px;box-shadow:inset 0 9px 0 var(--gold);transform-origin:50% 0;backface-visibility:hidden}
.cal-page.flip{animation:flip 900ms var(--ease-io) forwards;z-index:2}
@keyframes flip{to{transform:rotateX(-110deg);opacity:0}}
.hourglass{width:26px;height:44px}
.ytext{color:var(--cream);line-height:1.35}
.ytext b{display:block;font-size:.95rem}
.ytext small{font-size:.78rem;color:oklch(80% 0.05 70);font-variant-numeric:tabular-nums}
.trade{position:relative}
.trade.on{background:var(--gold);color:var(--ink);box-shadow:0 0 0 0 var(--gold);animation:pulse 1.6s var(--ease) infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 oklch(80% 0.13 82 / .7)}100%{box-shadow:0 0 0 16px oklch(80% 0.13 82 / 0)}}
.players{position:absolute;right:12px;top:92px;width:230px;display:flex;flex-direction:column;gap:6px;z-index:var(--z-panel)}
.pl{position:relative;display:grid;grid-template-columns:auto 1fr;gap:2px 10px;align-items:center;padding:8px 12px;border-radius:14px;background:oklch(27% 0.05 16);color:var(--cream);transition:transform 300ms var(--ease),background 300ms}
.pl.turn{background:var(--cream);color:var(--ink);transform:translateX(-8px)}
.pl.out{opacity:.4}
.pl.out .pl-name{text-decoration:line-through}
.pl .mini{grid-row:span 2;transform:scale(.8)}
.pl-name{font-weight:800;font-size:.9rem;display:flex;gap:6px;align-items:center}
.pl-name em{font-style:normal;font-size:.7rem;padding:1px 6px;border-radius:6px;background:oklch(40% 0.05 20);color:var(--cream)}
.pl.turn .pl-name em{background:var(--cream-2);color:var(--ink)}
.pl-cash{font-size:.8rem;font-variant-numeric:tabular-nums;opacity:.85}
.float{position:absolute;left:12px;top:6px;font-weight:800;font-size:.85rem;animation:float 1.3s var(--ease) forwards;pointer-events:none}
.float.pos{color:oklch(78% 0.16 150)}.float.neg{color:oklch(72% 0.17 27)}
.pl.turn .float.pos{color:var(--pos)}.pl.turn .float.neg{color:var(--neg)}
@keyframes float{from{transform:translateY(0);opacity:1}to{transform:translateY(-22px);opacity:0}}
.props{position:absolute;left:12px;top:92px;width:260px;max-height:calc(100vh - 290px);display:flex;flex-direction:column;border-radius:18px;background:var(--cream);z-index:var(--z-panel);box-shadow:0 20px 40px oklch(12% 0.03 14 / .45);overflow:hidden;transition:transform 400ms var(--ease),opacity 300ms}
.props.closed{transform:translateX(-110%);opacity:0;pointer-events:none}
.props header{padding:14px 16px 10px;display:flex;justify-content:space-between;align-items:baseline}
.props h3{font:24px/1 Lalezar}
.props header small{color:var(--ink-3);font-size:.75rem}
.plist{overflow:auto;padding:0 10px 12px}
.empty{padding:18px 8px;color:var(--ink-2);font-size:.85rem;line-height:1.8}
.prop{padding:10px 8px;border-top:1px solid var(--cream-2);display:grid;gap:6px}
.prop-h{display:flex;align-items:center;gap:8px}
.prop-h i{width:12px;height:12px;border-radius:3px;background:var(--gc);flex:none}
.prop-h b{flex:1;font-size:.9rem}
.prop-h small{font-size:.75rem;color:var(--ink-2);font-variant-numeric:tabular-nums}
.pips{display:flex;gap:3px}
.pips span{width:9px;height:9px;border-radius:2px;background:var(--cream-3)}
.pips span.on{background:var(--green)}
.pips span.fac{width:22px;background:var(--green-d)}
.acts{display:flex;gap:6px}
.acts button{flex:1;padding:6px 4px;border-radius:9px;font-size:.72rem;font-weight:800;background:var(--cream-2);line-height:1.3}
.acts button:not(:disabled):hover{background:var(--cream-3)}
.acts .b-house{background:oklch(90% 0.07 145)}
.acts .b-fac{background:oklch(84% 0.09 145)}
.rot{position:absolute;bottom:32px;width:56px;height:56px;border-radius:50%;background:var(--cream);color:var(--ink);font-size:22px;z-index:var(--z-hud);box-shadow:0 8px 20px oklch(12% 0.03 14 / .45);display:grid;place-items:center;transition:transform 150ms var(--ease)}
.rot:hover{transform:scale(1.08)}.rot:active{transform:scale(.94)}
.rot-l{left:max(12px,calc(50% - 340px))}.rot-r{right:max(12px,calc(50% - 340px))}
.dock{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;align-items:center;gap:14px;padding:12px 14px 12px 18px;border-radius:26px;background:var(--cream);z-index:var(--z-panel);box-shadow:0 20px 40px oklch(12% 0.03 14 / .5);min-height:84px;max-width:calc(100vw - 24px)}
.who{display:flex;align-items:center;gap:10px;min-width:0}
.who .mini{transform:scale(.9)}
.who b{display:block;font-size:1rem;white-space:nowrap}
.who small{display:block;font-size:.78rem;color:var(--ink-2);white-space:nowrap}
.roll{position:relative;width:64px;height:64px;border-radius:50%;background:var(--red);color:var(--cream);font-weight:800;font-size:.85rem;line-height:1.2;box-shadow:0 5px 0 var(--red-d),inset 0 2px 0 oklch(100% 0 0 / .25);transition:transform 100ms var(--ease),box-shadow 100ms}
.roll:active:not(:disabled){transform:translateY(4px);box-shadow:0 1px 0 var(--red-d)}
.roll.idle:not(:disabled){animation:breathe 2.4s var(--ease-io) infinite}
@keyframes breathe{50%{box-shadow:0 5px 0 var(--red-d),0 0 0 8px oklch(58% 0.2 27 / .18)}}
.act{padding:12px 18px;border-radius:14px;font-weight:800;background:var(--ink);color:var(--cream);white-space:nowrap}
.act.alt{background:var(--cream-2);color:var(--ink)}
.act.good{background:var(--green-d)}
.act:not(:disabled):hover{filter:brightness(1.1)}
.act small{display:block;font-size:.72rem;font-weight:600;opacity:.8}
.thinking{color:var(--ink-2);font-size:.9rem}
.thinking::after{content:"…";animation:dots 1s steps(3) infinite}
.dres{position:absolute;left:50%;top:18%;transform:translateX(-50%);font:44px/1 Lalezar;color:var(--gold);text-shadow:0 3px 0 oklch(30% 0.06 30);z-index:var(--z-hud);pointer-events:none;animation:dres 1.8s var(--ease) forwards}
@keyframes dres{0%{opacity:0;transform:translate(-50%,10px) scale(.8)}15%{opacity:1;transform:translate(-50%,0) scale(1)}80%{opacity:1}100%{opacity:0}}
.log{position:absolute;right:12px;bottom:110px;width:230px;display:flex;flex-direction:column;gap:4px;z-index:var(--z-hud);pointer-events:none}
.log p{font-size:.78rem;color:oklch(88% 0.03 60);line-height:1.5;animation:logIn 400ms var(--ease)}
.log p:not(:last-child){opacity:.55}
@keyframes logIn{from{opacity:0;transform:translateY(6px)}}
.tile-info{position:absolute;left:12px;bottom:118px;width:260px;background:var(--cream);border-radius:18px;overflow:hidden;z-index:calc(var(--z-panel) + 1);box-shadow:0 20px 40px oklch(12% 0.03 14 / .5);animation:logIn 300ms var(--ease)}
.ti-band{padding:14px 16px;background:var(--gc);color:var(--tc,oklch(98% 0.01 80))}
.ti-band b{font:28px/1 Lalezar;display:block}
.ti-band small{opacity:.85;font-size:.8rem}
.ti-body{padding:12px 16px 16px;display:grid;gap:4px;font-size:.85rem}
.ti-body div{display:flex;justify-content:space-between;font-variant-numeric:tabular-nums}
.ti-body div.cur{font-weight:800;color:var(--red)}
.ti-close{position:absolute;inset-inline-end:10px;top:10px;width:30px;height:30px;border-radius:50%;background:oklch(100% 0 0 / .25);color:inherit}
.card-ov{position:fixed;inset:0;display:grid;place-items:center;background:oklch(15% 0.03 14 / .45);z-index:var(--z-ov);perspective:900px}
.card{width:min(340px,88vw);border-radius:20px;background:var(--cream);overflow:hidden;box-shadow:0 30px 60px oklch(10% 0.03 14 / .5);animation:cardIn 700ms var(--ease) both}
@keyframes cardIn{from{transform:rotateY(100deg) translateY(30px);opacity:0}}
.card header{padding:18px;background:var(--cc);color:var(--tc,oklch(98% 0.01 80));font:30px/1 Lalezar;display:flex;justify-content:space-between;align-items:center}
.card p{padding:22px 22px 8px;font-size:1.1rem;font-weight:600;line-height:1.9}
.card footer{padding:12px 22px 22px}
/* deed card (landing info, in front of camera) */
.deed-ov{position:fixed;inset:0;display:grid;place-items:center;z-index:calc(var(--z-ov) - 1);pointer-events:none;padding:12px}
.deed-ov .card{pointer-events:auto}
.card.deed{width:min(360px,92vw)}
.card header small{font:600 .8rem Vazirmatn;opacity:.9}
.drows{padding:14px 22px 4px;display:grid;gap:3px;font-size:.86rem}
.drows>div{display:flex;justify-content:space-between;font-variant-numeric:tabular-nums}
.drows>div.cur{font-weight:800;color:var(--red)}
.drows .ddesc{line-height:1.8;font-weight:600}
.dstamp{margin:10px 22px 0;padding:8px;border:2px dashed var(--red);border-radius:10px;color:var(--red);font-weight:800;font-size:.95rem;text-align:center;background:oklch(58% 0.2 27 / .06);animation:logIn .3s var(--ease)}
.dnote{padding:8px 22px 14px;font-size:.8rem;color:var(--ink-2);text-align:center;line-height:1.7}
.card.deed footer{display:flex;gap:8px}
.card.deed footer .act{flex:1}
.mbadge{align-self:center;padding:6px 12px;border-radius:999px;background:linear-gradient(135deg,oklch(62% 0.13 150),oklch(45% 0.11 150));color:oklch(98% 0.01 80);font-weight:800;font-size:.75rem;box-shadow:0 4px 14px oklch(50% 0.12 150 / .5);pointer-events:none}
.mbtn.ind{--bc:oklch(48% 0.09 150);--bd:oklch(34% 0.07 150)}
.fyield{font-size:.75rem;color:oklch(45% 0.12 80);font-weight:800}
@media (max-width:820px){.deed-ov{align-items:start;padding-top:64px}}
.toast{position:fixed;left:50%;top:84px;transform:translate(-50%,-20px);opacity:0;padding:12px 20px;border-radius:14px;background:var(--gold);color:var(--ink);font-weight:800;z-index:var(--z-toast);transition:opacity 300ms,transform 400ms var(--ease);pointer-events:none;max-width:90vw;text-align:center}
.toast.on{opacity:1;transform:translate(-50%,0)}
dialog{margin:auto;border:0;border-radius:22px;background:var(--cream);color:var(--ink);width:min(720px,94vw);max-height:90vh;padding:0;box-shadow:0 30px 70px oklch(10% 0.03 14 / .6)}
dialog::backdrop{background:oklch(15% 0.03 14 / .55)}
.dlg{padding:22px;display:grid;gap:16px}
.dlg h2{font:32px/1 Lalezar}
.pick{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}
.pick button{display:flex;align-items:center;gap:10px;padding:10px;border-radius:14px;background:var(--cream-2);font-weight:800;text-align:start}
.pick button:hover{background:var(--cream-3)}
.tcols{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.tcol{display:grid;gap:8px;align-content:start}
.tcol h4{font-size:.95rem;display:flex;gap:8px;align-items:center}
.zone{min-height:62px;padding:8px;border-radius:14px;border:2px dashed var(--cream-3);display:flex;flex-wrap:wrap;gap:6px;align-content:flex-start;transition:background 200ms,border-color 200ms}
.zone.offer{background:oklch(94% 0.04 150);border-color:oklch(80% 0.08 150)}
.zone.over{background:oklch(90% 0.08 150)}
.zone:empty::before{content:attr(data-empty);font-size:.78rem;color:var(--ink-3);padding:4px}
.chip{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:10px;background:oklch(99% 0.008 80);box-shadow:inset 0 0 0 1px var(--cream-3);font-size:.8rem;font-weight:600;cursor:grab;user-select:none}
.chip i{width:10px;height:10px;border-radius:3px;background:var(--gc)}
.chip small{color:var(--ink-3);font-variant-numeric:tabular-nums}
.cashrow{display:grid;gap:4px;font-size:.8rem}
.cashrow b{font-variant-numeric:tabular-nums}
.tfoot{display:flex;gap:10px;justify-content:flex-start;flex-wrap:wrap;align-items:center}
.tsum{background:var(--cream-2);border-radius:14px;padding:14px;line-height:2;font-size:.95rem}
.win{position:fixed;inset:0;display:grid;place-items:center;z-index:var(--z-ov);background:oklch(15% 0.03 14 / .6)}
.win .card header{font-size:40px}
@keyframes dots{from{content:""}to{content:"…"}}
@media (max-width:820px){
  .players{top:auto;bottom:auto;position:absolute;left:12px;right:12px;top:72px;width:auto;flex-direction:row;overflow-x:auto;scrollbar-width:none}
  .pl{flex:none;grid-template-columns:auto auto;padding:6px 10px}
  .pl.turn{transform:translateY(2px)}
  .pl-cash{font-size:.72rem}
  .props{top:auto;bottom:112px;left:12px;right:12px;width:auto;max-height:46vh}
  .props.closed{transform:translateY(120%)}
  .log{display:none}
  .year{padding:6px 10px;gap:8px}.cal{width:58px;height:44px}.cal-page{font-size:24px}
  .ytext b{font-size:.8rem}
  .iconbtn span{display:none}
  .rot{width:46px;height:46px;top:auto;bottom:118px}
  .tile-info{left:12px;right:12px;width:auto;bottom:112px}
  .dock{gap:10px;padding:10px;bottom:12px;width:calc(100vw - 24px);justify-content:space-between}
  .who small{display:none}
  .tcols{grid-template-columns:1fr}
  .menu-panel{right:50%;transform:translate(50%,0);top:auto;bottom:24px}
  .menu-panel.out{transform:translate(50%,30px)}
  .box-wrap{left:50%;top:26%;transform:translate(-50%,-50%) scale(.62)}
  .room{transform-origin:50% 26%}
  .mbtn{padding:10px 14px}.mbtn .ic{width:36px;height:36px}
  .window{width:38%}
}
@media (prefers-reduced-motion:reduce){*{animation-duration:1ms!important;transition-duration:1ms!important}}
/* ============ v2 additions ============ */
:root{--B:980px;--C:110px}
.ver{margin-inline-start:8px;padding:1px 7px;border-radius:6px;background:var(--ink);color:var(--cream);font-size:.7rem;letter-spacing:.04em}
.eyebrow{display:flex;align-items:center}
.mbtn{position:relative;padding:12px 16px}
.nbadge{position:absolute;inset-inline-end:14px;top:50%;transform:translateY(-50%);min-width:26px;height:26px;padding:0 8px;border-radius:13px;display:grid;place-items:center;background:var(--cream);color:var(--green-d);font-weight:800;font-size:.85rem;box-shadow:0 0 0 3px var(--green-d)}
.sep{border:0;border-top:1.5px dashed var(--cream-3);margin:2px 0}
.sub-h{font-size:.8rem;font-weight:800;letter-spacing:.06em;color:var(--ink-2);margin-top:4px}
.sh{display:flex;align-items:center;justify-content:space-between;gap:10px}
.x{width:34px;height:34px;border-radius:50%;background:var(--cream-2);color:var(--ink);font-size:14px;flex:none}
.x:hover{background:var(--cream-3)}
.row.wrap{flex-wrap:wrap}
.pill.ind{background:oklch(40% 0.09 150)}
/* net status */
.net{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;font-size:.72rem;font-weight:800;background:var(--cream-2);color:var(--ink-2);white-space:nowrap}
.net::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--ink-3)}
.net[data-s=online]{background:oklch(92% 0.06 150);color:var(--green-d)}.net[data-s=online]::before{background:var(--green);box-shadow:0 0 0 3px oklch(63% 0.15 150 / .25)}
.net[data-s=connecting]::before{background:var(--gold-d);animation:twinkle 1s infinite}
.net[data-s=local]{background:oklch(93% 0.05 85);color:var(--gold-d)}.net[data-s=local]::before{background:var(--gold-d)}
.net[data-s=taken]{background:oklch(92% 0.05 27);color:var(--red-d)}.net[data-s=taken]::before{background:var(--red)}
/* friends */
.code-row{display:flex;gap:8px;align-items:stretch}.code-row .code{flex:1;font-size:1.25rem}
.addf{display:flex;gap:8px}.addf input{flex:1;text-transform:uppercase;letter-spacing:.08em}
.friend .av{position:relative;flex:none}
.friend .dot,.chipbtn .dot{width:10px;height:10px;border-radius:50%;background:var(--cream-3);box-shadow:0 0 0 2px var(--cream)}
.friend .av .dot{position:absolute;inset-inline-end:-2px;bottom:-2px}
.dot.on{background:var(--green)}
.friend.req{background:oklch(94% 0.05 85);border-radius:12px;padding:10px;border-bottom:0;margin-bottom:6px}
.friend.pending{opacity:.75}
.friend .pill{padding:8px 12px;font-size:.8rem}
.friend small{text-align:start}
/* lobby */
.roomcode{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border-radius:14px;background:var(--ink);color:var(--cream)}
.roomcode small{opacity:.75;font-size:.78rem}
.roomcode b{font:800 1.3rem/1 Vazirmatn;letter-spacing:.12em}
.seats{display:grid}
.invrow{display:flex;flex-wrap:wrap;gap:6px}
.chipbtn{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:999px;background:var(--cream-2);font-weight:600;font-size:.82rem}
.chipbtn.on{background:oklch(92% 0.06 150)}
.chipbtn:hover{background:var(--cream-3)}
/* prefs: language + audio */
.prefs{display:flex;flex-direction:column;gap:14px}
.seg{display:grid;grid-template-columns:1fr 1fr;padding:4px;border-radius:12px;background:var(--cream-2)}
.seg button{padding:8px;border-radius:9px;font-weight:800;font-size:.9rem;color:var(--ink-2)}
.seg button[aria-pressed=true]{background:var(--ink);color:var(--cream)}
.player{border-radius:16px;background:var(--felt-d);color:var(--cream);padding:12px;display:grid;gap:10px;transition:opacity 300ms}
.player.muted{opacity:.55}
.np{display:flex;align-items:center;gap:12px}
.np-t{flex:1;min-width:0}
.np-t small{display:block;font-size:.7rem;opacity:.7;letter-spacing:.04em}
.np-t b{display:block;font-size:.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.np-nav{display:flex;gap:6px}
.np-nav button{width:34px;height:34px;border-radius:50%;background:oklch(32% 0.05 16);color:var(--gold);font-size:20px;line-height:1}
.np-nav button:hover{background:oklch(38% 0.06 16)}
[dir=rtl] .np-nav button{transform:scaleX(-1)}
.eq{display:flex;align-items:flex-end;gap:2px;width:22px;height:20px;flex:none}
.eq i{flex:1;height:30%;border-radius:1px;background:var(--gold)}
.eq.on i{animation:eq 900ms var(--ease-io) infinite alternate}
.eq.on i:nth-child(2){animation-delay:-300ms}.eq.on i:nth-child(3){animation-delay:-600ms}.eq.on i:nth-child(4){animation-delay:-150ms}
@keyframes eq{0%{height:20%}100%{height:100%}}
.tracks{list-style:none;display:grid;gap:2px;max-height:196px;overflow:auto}
.tracks button{width:100%;display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:10px;text-align:start;color:oklch(88% 0.03 70)}
.tracks button:hover{background:oklch(28% 0.05 16)}
.tracks button[aria-pressed=true]{background:oklch(32% 0.06 16);color:var(--cream)}
.tracks button[aria-pressed=true] .tno{background:var(--gold);color:var(--ink)}
.tno{width:24px;height:24px;border-radius:50%;display:grid;place-items:center;font-size:.75rem;font-weight:800;background:oklch(34% 0.04 20);flex:none}
.tt{font-size:.86rem;font-weight:600;line-height:1.3}
.tt small{display:block;font-size:.7rem;opacity:.6;font-weight:400}
.vol{display:flex;align-items:center;gap:10px;font-size:.78rem;opacity:.85}
.vol input{accent-color:var(--gold)}
/* switch direction for LTR */
.switch>span{flex:1}
[dir=ltr] .switch input::after{right:auto;left:3px}
[dir=ltr] .switch input:checked::after{transform:translateX(20px)}
[dir=ltr] .mbtn small,[dir=ltr] .friend small{text-align:left}
/* actionable notifications */
.notes{position:fixed;top:14px;inset-inline-start:50%;transform:translateX(50%);width:min(380px,calc(100vw - 24px));display:flex;flex-direction:column;gap:8px;z-index:calc(var(--z-toast) + 5);pointer-events:none}
[dir=ltr] .notes{transform:translateX(-50%)}
.note{position:relative;overflow:hidden;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;align-items:center;padding:12px 14px;border-radius:16px;background:var(--cream);color:var(--ink);box-shadow:0 18px 40px oklch(12% 0.03 14 / .45),0 0 0 1px var(--cream-3);pointer-events:auto;animation:noteIn 420ms var(--ease) both}
.note.bye{animation:noteOut 360ms var(--ease-io) forwards}
@keyframes noteIn{from{opacity:0;transform:translateY(-14px) scale(.97)}}
@keyframes noteOut{to{opacity:0;transform:translateY(-10px) scale(.97)}}
.n-ic{grid-row:span 2;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;font-size:20px;background:var(--cream-2)}
.n-tx b{display:block;font-size:.92rem;line-height:1.45}
.n-tx small{display:block;font-size:.75rem;color:var(--ink-3);direction:ltr;text-align:start}
.n-act{grid-column:2;display:flex;gap:6px;margin-top:4px}
.n-btn{padding:7px 14px;border-radius:10px;font-weight:800;font-size:.82rem;background:var(--cream-2)}
.n-btn.ok{background:var(--green-d);color:var(--cream)}
.n-btn:hover{filter:brightness(1.06)}
.n-tm{position:absolute;inset-inline:0;bottom:0;height:3px;background:var(--gold);transform-origin:right;animation:ntm linear forwards}
[dir=ltr] .n-tm{transform-origin:left}
@keyframes ntm{to{transform:scaleX(0)}}
/* HUD: menu popover, chat button */
.gm-wrap{position:relative}
.hud-top:has(.gmenu:not([hidden])){z-index:calc(var(--z-panel) + 3)}
.gmenu{position:absolute;top:52px;inset-inline-start:0;min-width:230px;padding:6px;border-radius:16px;background:var(--cream);box-shadow:0 20px 40px oklch(12% 0.03 14 / .5);display:grid;gap:2px;z-index:calc(var(--z-panel) + 2);animation:logIn 260ms var(--ease)}
.gmenu button{padding:11px 12px;border-radius:11px;text-align:start;font-weight:800;font-size:.92rem}
.gmenu button:hover{background:var(--cream-2)}
.gmenu .danger{color:var(--red-d)}
.gmenu .danger:hover{background:oklch(93% 0.04 27)}
#bChat{position:relative}
.cbadge{position:absolute;top:-6px;inset-inline-end:-6px;min-width:20px;height:20px;padding:0 5px;border-radius:10px;display:grid;place-items:center;background:var(--gold);color:var(--ink);font-size:.72rem;font-weight:800;box-shadow:0 0 0 2px oklch(28% 0.05 18)}
#bChat.ping{animation:ping 700ms var(--ease)}
@keyframes ping{30%{transform:translateY(-3px)}}
#bChat[aria-expanded=true],#bHome[aria-expanded=true]{background:var(--cream);color:var(--ink)}
/* chat drawer */
.chat{position:absolute;left:12px;top:92px;width:300px;height:min(520px,calc(100vh - 230px));display:flex;flex-direction:column;border-radius:18px;background:var(--cream);z-index:var(--z-panel);box-shadow:0 20px 40px oklch(12% 0.03 14 / .45);overflow:hidden;transition:transform 420ms var(--ease),opacity 300ms}
.chat.closed{transform:translateX(-110%);opacity:0;pointer-events:none}
.chat header{display:flex;justify-content:space-between;align-items:center;padding:14px 14px 10px 16px;border-bottom:1px solid var(--cream-2)}
.chat h3{font:24px/1 Lalezar}
.chat header small{display:block;font-size:.72rem;color:var(--ink-3);margin-top:2px}
.clist{flex:1;overflow:auto;padding:12px 12px 4px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}
.c-empty{margin:auto 8px;text-align:center;color:var(--ink-3);font-size:.82rem;line-height:1.8}
.msg{display:flex;gap:8px;align-items:flex-end;max-width:88%;animation:logIn 300ms var(--ease)}
.msg.mine{align-self:flex-end;flex-direction:row-reverse}
.c-dot{width:22px;height:22px;border-radius:50%;flex:none;background:var(--pc);box-shadow:inset 0 0 0 2px oklch(100% 0 0 / .35)}
.c-b{background:var(--cream-2);border-radius:14px 14px 14px 4px;padding:7px 11px}
[dir=rtl] .c-b{border-radius:14px 14px 4px 14px}
.msg.mine .c-b{background:var(--ink);color:var(--cream);border-radius:14px 14px 4px 14px}
[dir=rtl] .msg.mine .c-b{border-radius:14px 14px 14px 4px}
.c-h{display:flex;gap:8px;align-items:baseline;justify-content:space-between}
.c-h b{font-size:.74rem;font-weight:800;opacity:.75}
.c-h time{font-size:.66rem;opacity:.5;font-variant-numeric:tabular-nums}
.c-b p{font-size:.9rem;line-height:1.55;overflow-wrap:anywhere}
.quick{display:flex;gap:6px;padding:6px 12px;overflow-x:auto;scrollbar-width:none}
.quick button{flex:none;padding:5px 10px;border-radius:999px;background:var(--cream-2);font-size:.78rem;font-weight:600;white-space:nowrap}
.quick button:hover{background:var(--cream-3)}
.cform{display:flex;gap:8px;padding:8px 12px 12px}
.cform input{flex:1}
.send{width:42px;border-radius:12px;background:var(--red);color:var(--cream);font-size:16px;flex:none}
[dir=rtl] .send{transform:scaleX(-1)}
/* purchase quota */
.quota{margin:0 12px 8px;padding:8px 10px;border-radius:10px;background:oklch(93% 0.05 150);color:var(--green-d);font-size:.74rem;font-weight:600;line-height:1.6}
.quota.used{background:var(--cream-2);color:var(--ink-2)}
.quota-chip{padding:8px 12px;border-radius:12px;background:var(--cream-2);color:var(--ink-2);font-size:.78rem;font-weight:800;white-space:nowrap}
.prop.here{background:oklch(95% 0.05 90);border-radius:10px}
.acts .b-sell.arm{background:oklch(88% 0.08 27)}
.tile.mark{box-shadow:inset 0 0 0 3px var(--gold);animation:markp 1.6s var(--ease-io) infinite}
@keyframes markp{50%{box-shadow:inset 0 0 0 3px oklch(80% 0.13 82 / .35)}}
.set-dlg{width:min(460px,94vw)}
.set-dlg .dlg{gap:14px}
@media (max-width:820px){
  .chat{top:auto;bottom:112px;left:12px;right:12px;width:auto;height:min(58vh,480px)}
  .chat.closed{transform:translateY(120%)}
  .notes{top:8px}
  .gmenu{min-width:210px}
  .code-row{flex-wrap:wrap}
}
</style>
</head>
<body>

<!-- ================= MENU ================= -->
<section id="menu" class="screen active">
  <div class="room" id="room">
    <div class="bokeh">
      <div class="window"></div>
      <div class="lights" id="lights"></div>
      <div class="shelf"></div>
      <div class="bear"></div>
      <div class="blocks"><b style="--c:var(--red)">ا</b><b style="--c:var(--blue)">ب</b><b style="--c:oklch(78% 0.15 85)">پ</b></div>
      <div class="rocket"></div>
    </div>
    <div class="desk"></div>
    <div class="box-wrap"><div class="box">
      <div class="lid"><div class="lid-inner"><span class="brand" data-en="Monopoly">مونوپولی</span><span class="sub" data-en="Iranian edition · Shoush to Niavaran">نسخه‌ی ایرانی · از شوش تا نیاوران</span></div></div>
      <div class="side s-front"></div><div class="side s-right"></div>
    </div></div>
  </div>
  <div class="veil" id="veil"></div>

  <nav class="menu-panel" id="pMain">
    <p class="eyebrow"><span data-en="Board game · 2 to 10 players">بازی تخته‌ای · ۲ تا ۱۰ نفر</span><span class="ver">v2</span></p>
    <button class="mbtn" id="bStart" type="button"><span class="ic">🎲</span><span><b data-en="Classic mode">مود کلاسیک</b><small data-en="مود کلاسیک">CLASSIC MODE</small></span></button>
    <button class="mbtn ind" id="bStartInd" type="button"><span class="ic">🏭</span><span><b data-en="Industrial mode">مود صنعتی</b><small data-en="مود صنعتی">INDUSTRIAL MODE</small></span></button>
    <button class="mbtn blue" data-open="pOnline" type="button"><span class="ic">🌐</span><span><b data-en="Play online">بازی آنلاین</b><small data-en="بازی آنلاین">PLAY ONLINE</small></span></button>
    <button class="mbtn green" data-open="pFriends" type="button"><span class="ic">👥</span><span><b data-en="Friends">دوستان</b><small data-en="دوستان">FRIENDS · ADD</small></span><span class="nbadge" id="frBadge" hidden></span></button>
    <button class="mbtn yellow" data-open="pSettings" type="button"><span class="ic">⚙️</span><span><b data-en="Settings">تنظیمات</b><small data-en="تنظیمات">SETTINGS · AUDIO</small></span></button>
  </nav>

  <div class="menu-panel out" id="pSettings"><div class="sheet">
    <h2 data-en="Settings">تنظیمات</h2>
    <div class="prefs"></div>
    <hr class="sep">
    <h4 class="sub-h" data-en="New game">بازی جدید</h4>
    <div class="field"><label for="sName" data-en="Your name">اسم تو</label><input type="text" id="sName" maxlength="14"></div>
    <div class="field"><span class="lbl" data-en="Players">تعداد بازیکن‌ها</span><div class="stepper"><button id="pMinus" type="button" aria-label="کم" data-en-aria="Fewer">−</button><span id="pCount">۴</span><button id="pPlus" type="button" aria-label="زیاد" data-en-aria="More">+</button></div></div>
    <label class="switch"><span data-en="Other seats are bots">بقیه‌ی بازیکن‌ها ربات باشن</span><input type="checkbox" id="sBots"></label>
    <div class="field"><label for="sMoney"><span data-en="Starting cash">پول اولیه</span> <output id="oMoney"></output></label><input type="range" id="sMoney" min="5" max="50" step="1"></div>
    <div class="field"><span class="lbl" data-en="Your token">آیکون مهره‌ی تو</span><div class="icons" id="sIcons"></div></div>
    <div class="field"><label for="sInf"><span data-en="Yearly inflation">تورم سالانه</span> <output id="oInf"></output></label><input type="range" id="sInf" min="0" max="100" step="5"></div>
    <div class="field"><label for="sYear"><span data-en="Length of a year">طول هر سال</span> <output id="oYear"></output></label><input type="range" id="sYear" min="1" max="30" step="1"></div>
    <div class="field"><label for="sTrade"><span data-en="Trade window">فاصله‌ی معامله</span> <output id="oTrade"></output></label><input type="range" id="sTrade" min="1" max="10" step="1"></div>
    <div class="field"><label for="sSell"><span data-en="Resale return">بازگشت سرمایه در فروش</span> <output id="oSell"></output></label><input type="range" id="sSell" min="25" max="100" step="5"></div>
    <div class="row"><button class="pill" data-back type="button" data-en="Save &amp; back">ذخیره و برگشت</button></div>
  </div></div>

  <div class="menu-panel out" id="pFriends"><div class="sheet">
    <header class="sh"><h2 data-en="Friends">دوستان</h2><span class="net" data-s="off"></span></header>
    <p class="hint" data-en="Your friend code. Send it to a friend:">کد دوستی تو، اینو برای دوستت بفرست:</p>
    <div class="code-row"><div class="code" id="myCode"></div><button class="pill ghost" id="copyCode" type="button" data-en="Copy">کپی</button><button class="pill ghost" id="shareCode" type="button" data-en="Link">لینک</button></div>
    <div class="addf" id="addForm"><input type="text" id="fCode" placeholder="IR-XXXXXX" dir="ltr" autocomplete="off" aria-label="کد دوستت" data-en-aria="Friend code"><button class="pill" type="button" id="addBtn" data-en="Add friend">افزودن دوست</button></div>
    <div id="reqList"></div>
    <div id="fList"></div>
    <div class="row"><button class="pill ghost" data-back type="button" data-en="Back">برگشت</button></div>
  </div></div>

  <div class="menu-panel out" id="pOnline"><div class="sheet">
    <header class="sh"><h2 data-en="Play online">بازی آنلاین</h2><span class="net" data-s="off"></span></header>
    <div id="lobby"></div>
    <div class="row"><button class="pill ghost" data-back type="button" data-en="Back">برگشت</button></div>
  </div></div>
</section>

<!-- ================= GAME ================= -->
<section id="game" class="screen">
  <div class="stage" id="stage"><div class="shake" id="shake"><div class="cam" id="cam">
    <div class="board intro" id="board">
      <div class="board-shadow"></div>
      <div class="edge" style="--k:0"><i></i></div><div class="edge" style="--k:1"><i></i></div><div class="edge" style="--k:2"><i></i></div><div class="edge" style="--k:3"><i></i></div>
      <div class="face" id="face">
        <div class="center">
          <div class="logo">مونوپولی<small>جنوب شهر ← شمال شهر</small></div>
          <div class="deck chance">شانس</div><div class="deck chest">صندوق</div>
        </div>
        <div class="bowl"></div>
      </div>
      <div class="layer" id="bldLayer"></div>
      <div class="layer" id="tokLayer"></div>
      <div class="layer" id="diceLayer"></div>
    </div>
  </div></div></div>

  <header class="hud-top">
    <div class="row">
      <div class="gm-wrap">
        <button class="iconbtn" id="bHome" type="button" aria-haspopup="menu" aria-expanded="false">☰ <span data-en="Menu">منو</span></button>
        <div class="gmenu" id="gMenu" role="menu" hidden>
          <button type="button" id="gResume" role="menuitem">▶ <span data-en="Resume">ادامه‌ی بازی</span></button>
          <button type="button" id="gSettings" role="menuitem">⚙️ <span data-en="Settings · music">تنظیمات · موسیقی</span></button>
          <button type="button" id="gExit" class="danger" role="menuitem">خروج به منوی اصلی</button>
        </div>
      </div>
      <button class="iconbtn" id="bProps" type="button">🏘️ <span data-en="Properties">املاک</span></button>
      <button class="iconbtn" id="bChat" type="button" aria-controls="chatPanel" aria-expanded="false">💬 <span data-en="Chat">چت</span><b class="cbadge" id="chatBadge" hidden></b></button>
      <span class="mbadge" id="modeBadge" hidden data-en="🏭 Industrial">🏭 مود صنعتی</span>
    </div>
    <div class="year">
      <div class="cal" id="cal"><div class="cal-page" id="calPage">۱۴۰۰</div></div>
      <svg class="hourglass" viewBox="0 0 26 44" aria-hidden="true">
        <defs><clipPath id="hgTop"><path d="M5 4h16c0 8-6 12-8 18-2-6-8-10-8-18z"/></clipPath><clipPath id="hgBot"><path d="M13 22c2 6 8 10 8 18H5c0-8 6-12 8-18z"/></clipPath></defs>
        <rect x="2" y="1" width="22" height="3" rx="1.5" fill="oklch(80% 0.13 82)"/><rect x="2" y="40" width="22" height="3" rx="1.5" fill="oklch(80% 0.13 82)"/>
        <path d="M5 4h16c0 8-6 12-8 18 2 6 8 10 8 18H5c0-8 6-12 8-18-2-6-8-10-8-18z" fill="oklch(40% 0.04 30)" stroke="oklch(80% 0.13 82)" stroke-width="1.4"/>
        <rect id="sandTop" clip-path="url(#hgTop)" x="0" y="4" width="26" height="18" fill="oklch(85% 0.1 85)"/>
        <rect id="sandBot" clip-path="url(#hgBot)" x="0" y="40" width="26" height="0" fill="oklch(85% 0.1 85)"/>
      </svg>
      <div class="ytext"><b id="yLabel"></b><small id="yLeft">۲۰:۰۰</small></div>
    </div>
    <button class="iconbtn trade" id="bTrade" type="button" disabled>💼 <span id="tradeTxt"></span></button>
  </header>

  <aside class="players" id="players"></aside>
  <aside class="props" id="propsPanel">
    <header><h3 data-en="Properties">املاک</h3><small id="propsWho"></small></header>
    <p class="quota" id="quota"></p>
    <div class="plist" id="plist"></div>
  </aside>
  <aside class="chat closed" id="chatPanel" aria-label="چت" data-en-aria="Chat">
    <header><div><h3 data-en="Chat">چت</h3><small id="chatWho"></small></div><button class="x" id="chatClose" type="button" aria-label="بستن" data-en-aria="Close">✕</button></header>
    <div class="clist" id="chatList" aria-live="polite"></div>
    <div class="quick" id="chatQuick"></div>
    <div class="cform" id="chatForm"><input type="text" id="chatIn" maxlength="240" autocomplete="off" placeholder="یه چیزی بگو…" data-en-ph="Say something…" aria-label="پیام" data-en-aria="Message"><button class="send" type="button" id="chatSend" aria-label="ارسال" data-en-aria="Send">➤</button></div>
  </aside>
  <button class="rot rot-l" id="rotL" type="button" aria-label="چرخش به چپ" data-en-aria="Rotate left">◀</button>
  <button class="rot rot-r" id="rotR" type="button" aria-label="چرخش به راست" data-en-aria="Rotate right">▶</button>
  <div class="dock" id="dock"></div>
  <div class="log" id="log"></div>
  <div class="tile-info" id="tileInfo" hidden></div>
  <div class="card-ov" id="cardOv" hidden></div>
  <div class="deed-ov" id="deedOv" hidden></div>
  <div class="win" id="winOv" hidden></div>
  <dialog id="tradeDlg"></dialog>
  <dialog id="setDlg" class="set-dlg"><div class="dlg">
    <header class="sh"><h2 data-en="Settings">تنظیمات</h2><button class="x" id="setClose" type="button" aria-label="بستن" data-en-aria="Close">✕</button></header>
    <div class="prefs"></div>
    <p class="hint" data-en="Game rules (cash, inflation, players) are locked once a game starts. Change them from the main menu.">قوانین بازی (پول، تورم، تعداد نفرات) وسط بازی قفله؛ از منوی اصلی عوضشون کن.</p>
  </div></dialog>
</section>
<div class="toast" id="toast"></div>
<div class="notes" id="notes" aria-live="assertive"></div>

<script>
'use strict';
/* =====================================================================
   MONOPOLY IRANI · v2
   single-file build: data · i18n · audio · net · friends · room · chat · game
   ===================================================================== */

/* ---------------- STORAGE (?profile=x gives each tab its own identity) ---------------- */
const PROFILE=(location.search.match(/[?&]profile=([\\w-]{1,12})/)||[])[1]||'';
const store={key(k){return PROFILE?k+'@'+PROFILE:k},
  get(k,d){try{const v=localStorage.getItem(this.key(k));return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(this.key(k),JSON.stringify(v))}catch(e){}}};

/* ---------------- DATA ---------------- */
const GROUPS={
  brown:{c:'oklch(48% 0.08 50)',fa:'قهوه‌ای',en:'Brown'},
  sky:{c:'oklch(80% 0.09 225)',fa:'آبی روشن',en:'Light Blue',dark:1},
  pink:{c:'oklch(62% 0.2 345)',fa:'سرخابی',en:'Magenta'},
  orange:{c:'oklch(73% 0.16 55)',fa:'نارنجی',en:'Orange',dark:1},
  red:{c:'oklch(57% 0.2 27)',fa:'قرمز',en:'Red'},
  yellow:{c:'oklch(87% 0.15 95)',fa:'زرد',en:'Yellow',dark:1},
  green:{c:'oklch(58% 0.14 150)',fa:'سبز',en:'Green'},
  navy:{c:'oklch(36% 0.12 265)',fa:'آبی تیره',en:'Dark Blue'}
};
const P=(g,name,en,price,ic)=>({t:'prop',g,name,en,price,ic});
const X=(t,name,en,icon,extra)=>Object.assign({t,name,en,icon},extra||{});
const CHEST_T=()=>X('chest','صندوق اجتماعی','Community Chest','📦');
const CHANCE_T=()=>X('chance','شانس','Chance','🎰');
// 44 tiles · 11 per side · 8 districts × 4 streets, south of Tehran → north
const TILES=[
 X('start','شروع','GO','🎲'),
 P('brown','شوش','Shoush',600000,'🚉'),
 CHEST_T(),
 P('brown','نازی‌آباد','Nazi Abad',700000,'🛒'),
 X('tax','مالیات بر درآمد','Income Tax','💰',{kind:'income'}),
 P('brown','دولاب','Dulab',750000,'🧵'),
 P('brown','جوادیه','Javadieh',800000,'🛤️'),
 P('sky','مولوی','Molavi',1000000,'🧺'),
 P('sky','خانی‌آباد','Khani Abad',1050000,'🏘️'),
 P('sky','بازار بزرگ','Grand Bazaar',1100000,'🕌'),
 P('sky','راه‌آهن','Rah-Ahan',1200000,'🚂'),
 X('jail','زندان','Jail','🚔'),
 P('pink','یافت‌آباد','Yaftabad',1400000,'🏭'),
 CHANCE_T(),
 P('pink','تهرانپارس','Tehranpars',1450000,'🌳'),
 P('pink','پیروزی','Piroozi',1500000,'🏁'),
 P('pink','نظام‌آباد','Nezam Abad',1600000,'🍢'),
 P('orange','نارمک','Narmak',1800000,'🏡'),
 P('orange','پاسداران پایین','Lower Pasdaran',1900000,'🌆'),
 CHEST_T(),
 P('orange','ستارخان','Sattarkhan',2000000,'🚌'),
 P('orange','گیشا','Gisha',2100000,'🎓'),
 X('parking','پارکینگ آزاد','Free Parking','🅿️'),
 P('red','سعادت‌آباد','Saadat Abad',2400000,'🏙️'),
 CHANCE_T(),
 P('red','شهرک غرب','Shahrak-e Gharb',2500000,'🛍️'),
 P('red','پونک','Punak',2600000,'🎡'),
 P('red','مرزداران','Marzdaran',2700000,'🏢'),
 P('yellow','ونک','Vanak',3000000,'☕'),
 P('yellow','جردن','Jordan',3100000,'🍔'),
 X('tax','عوارض شهرداری','City Levy','💰',{kind:'fixed'}),
 P('yellow','یوسف‌آباد','Yousef Abad',3200000,'🎨'),
 P('yellow','میرداماد','Mirdamad',3300000,'💼'),
 X('gojail','برو به زندان','Go to Jail','👮'),
 P('green','فرمانیه','Farmanieh',3600000,'🌲'),
 P('green','زعفرانیه','Zafaranieh',3800000,'⛲'),
 CHEST_T(),
 P('green','قیطریه','Gheytarieh',3900000,'🌷'),
 P('green','دروس','Darrous',4100000,'🎾'),
 CHANCE_T(),
 P('navy','الهیه','Elahieh',4400000,'🏰'),
 P('navy','اقدسیه','Aghdasieh',4600000,'🐎'),
 P('navy','دربند','Darband',4800000,'🏔️'),
 P('navy','نیاوران','Niavaran',5000000,'👑')
];
const N=TILES.length,SIDE=N/4,JAIL=TILES.findIndex(t=>t.t==='jail');
const IDX=en=>TILES.findIndex(t=>t.en===en);
const CONFIG={rentBase:.1,rentMult:[1,1.6,2.4,3.4,4.6],factoryMult:7,setBonus:2,houseRate:.5,factoryRate:1,
  startBonus:2000000,jailFine:500000,fixedTax:1000000,tradeWindow:45,factoryYield:1};
const PCOLORS=[
 {fa:'قرمز',en:'Red',c:'oklch(62% 0.22 25)'},{fa:'آبی',en:'Blue',c:'oklch(60% 0.17 255)'},{fa:'سبز',en:'Green',c:'oklch(68% 0.17 150)'},
 {fa:'زرد',en:'Yellow',c:'oklch(86% 0.16 95)'},{fa:'بنفش',en:'Purple',c:'oklch(56% 0.2 305)'},{fa:'نارنجی',en:'Orange',c:'oklch(74% 0.17 55)'},
 {fa:'صورتی',en:'Pink',c:'oklch(75% 0.15 350)'},{fa:'فیروزه‌ای',en:'Teal',c:'oklch(76% 0.12 190)'},{fa:'طلایی',en:'Gold',c:'oklch(79% 0.13 80)'},{fa:'سفید',en:'White',c:'oklch(97% 0.01 90)',white:1}
];
const ICONS={horse:'🐎',plane:'✈️',ship:'🚢',train:'🚂',house:'🏠'};
const ICON_KEYS=Object.keys(ICONS);
// Background music playlist. Add {fa,en,src} entries to extend it; src:null = built-in generative score.
const PLAYLIST=[
 {id:'lounge',fa:'لانژ بارانی (موسیقی زنده‌ی بازی)',en:'Rainy Lounge (live generative)',src:null},
 {id:'riddles',fa:'صبحی پر از معما',en:'A Morning of Riddles',src:'audio/a_morning_of_riddles.mp3'},
 {id:'alcove',fa:'طاقچه‌ی کاشی',en:'The Tiled Alcove',src:'audio/the_tiled_alcove.mp3'},
 {id:'ledger',fa:'دفتر صبحگاهی',en:'The Morning Ledger',src:'audio/the_morning_ledger.mp3'}
];

/* ---------------- SETTINGS ---------------- */
const DEF={name:'عماد',players:4,bots:true,money:15,icon:'horse',music:true,sfx:true,vol:.7,track:0,lang:'fa',inflation:30,yearMin:20,tradeMin:3,sellRate:50};
let settings=Object.assign({},DEF,store.get('mono_settings',{}));
if(!PLAYLIST[settings.track])settings.track=0;
const saveSettings=()=>store.set('mono_settings',settings);

/* ---------------- I18N + FORMAT ---------------- */
const L=(l,a,b)=>l==='en'?b:a;
const tr=(a,b)=>L(settings.lang,a,b);
const res=(x,l=settings.lang)=>typeof x==='function'?x(l):(x&&typeof x==='object'&&'fa' in x)?(l==='en'?x.en:x.fa):(x==null?'':String(x));
const both=x=>x==null?undefined:(typeof x==='function'?{fa:x('fa'),en:x('en')}:x);
const loc=l=>l==='en'?'en-US':'fa-IR';
const fa=(n,l=settings.lang)=>Math.round(n).toLocaleString(loc(l));
const yr=(n,l=settings.lang)=>Math.round(n).toLocaleString(loc(l),{useGrouping:false});
const money=(n,l=settings.lang)=>fa(n,l)+L(l,' تومان',' T');
function short(n,l=settings.lang){const a=Math.abs(n),f=(v,d)=>v.toLocaleString(loc(l),{maximumFractionDigits:d});
  if(a>=1e9)return f(n/1e9,2)+L(l,' میلیارد','B');
  if(a>=1e6)return f(n/1e6,1)+L(l,' میلیون','M');
  return f(n/1e3,0)+L(l,' هزار','K')}
const tn=(i,l=settings.lang)=>L(l,TILES[i].name,TILES[i].en);
const esc=s=>String(s==null?'':s).replace(/[&<>"'\`]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','\`':'&#96;'}[c]));
// sandboxed iframes without allow-forms drop form submits, so wire Enter + click directly
function onSubmit(input,btn,fn){btn.onclick=fn;input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.isComposing){e.preventDefault();fn()}})}
const cleanName=s=>String(s||'').replace(/[<>&"'\`]/g,'').trim().slice(0,14);

/* ---------------- UTIL ---------------- */
const $=s=>document.querySelector(s);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const rnd=n=>Math.floor(Math.random()*n);
const rid=()=>Math.random().toString(36).slice(2,10);
const r10k=x=>Math.max(10000,Math.round(x/10000)*10000);
let toastT;
function toast(msg,ms=2600){const t=$('#toast');t.textContent=res(msg);t.classList.add('on');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('on'),ms)}

function applyLang(){const l=settings.lang,h=document.documentElement;h.lang=l;h.dir=l==='en'?'ltr':'rtl';
  document.title=L(l,'مونوپولی ایرانی','Monopoly Irani');
  document.querySelectorAll('[data-en]').forEach(el=>{if(el.dataset.fa===undefined)el.dataset.fa=el.innerHTML;el.innerHTML=l==='en'?el.dataset.en:el.dataset.fa});
  document.querySelectorAll('[data-en-ph]').forEach(el=>{if(el.dataset.faPh===undefined)el.dataset.faPh=el.placeholder;el.placeholder=l==='en'?el.dataset.enPh:el.dataset.faPh});
  document.querySelectorAll('[data-en-aria]').forEach(el=>{if(el.dataset.faAria===undefined)el.dataset.faAria=el.getAttribute('aria-label')||'';el.setAttribute('aria-label',l==='en'?el.dataset.enAria:el.dataset.faAria)});
  renderPrefs();Net.refresh();renderFriends();renderLobby();Chat.quick();if($('#pSettings')&&!$('#pSettings').classList.contains('out'))fillSettings();
  if(G&&Room.role!=='guest')G.players.forEach((p,i)=>{if(p.auto)p.name=(p.auto==='bot'?tr('ربات ','Bot '):tr('بازیکن ','Player '))+res(PCOLORS[i])});
  if(G){buildBoard();refreshTiles();renderAll();renderTime();$('#calPage').textContent=yr(G.year)}}

/* ---------------- AUDIO: synth SFX + generative score + file playlist ---------------- */
const Snd=(()=>{
  let ac,master,musicBus,sfxBus,noise,timer,nextT=0,step=0,mode='menu';
  const PROG={menu:[[57,60,64,67,71],[53,57,60,64,67],[48,52,55,59,62],[55,59,62,65]],game:[[53,57,60,64],[52,55,59,62],[50,53,57,60],[48,52,55,59,62]]};
  const PENTA=[72,74,76,79,81,84];
  const mf=m=>440*Math.pow(2,(m-69)/12);
  const synthOn=()=>settings.music&&!(PLAYLIST[settings.track]||{}).src;
  function init(){
    if(ac){if(ac.state==='suspended')ac.resume();return}
    const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
    ac=new AC();master=ac.createGain();master.gain.value=.9;
    const comp=ac.createDynamicsCompressor();comp.connect(master);master.connect(ac.destination);
    musicBus=ac.createGain();musicBus.gain.value=0;musicBus.connect(comp);
    sfxBus=ac.createGain();sfxBus.gain.value=settings.sfx?1:0;sfxBus.connect(comp);
    const len=ac.sampleRate*2;noise=ac.createBuffer(1,len,ac.sampleRate);const d=noise.getChannelData(0);let b=0;
    for(let i=0;i<len;i++){const w=Math.random()*2-1;b=.97*b+.03*w;d[i]=w*.6+b*2}
    const rs=ac.createBufferSource();rs.buffer=noise;rs.loop=true;const hp=ac.createBiquadFilter();hp.type='highpass';hp.frequency.value=1200;
    const lp=ac.createBiquadFilter();lp.type='lowpass';lp.frequency.value=5000;const rg=ac.createGain();rg.gain.value=.035;
    rs.connect(hp).connect(lp).connect(rg).connect(musicBus);rs.start();
    nextT=ac.currentTime+.1;timer=setInterval(sched,150);Music.apply();
  }
  const beat=60/66,eighth=beat/2;
  function sched(){while(nextT<ac.currentTime+.6){playStep(step,nextT);nextT+=eighth;step++}}
  function playStep(s,t){
    const prog=PROG[mode],e=s%16,chord=prog[Math.floor(s/16)%prog.length];
    if(e===0)pad(chord,t,16*eighth);
    if([0,3,6,8,11,14].includes(e)&&Math.random()<.8)piano(mf(chord[rnd(chord.length)]+12),t,.08+Math.random()*.06);
    if((e===4||e===12)&&Math.random()<.4)piano(mf(PENTA[rnd(PENTA.length)]),t+Math.random()*.05,.06);
    if(e===0||e===8)piano(mf(chord[0]-12),t,.1);
  }
  function piano(f,t,v){const o=ac.createOscillator(),o2=ac.createOscillator(),g=ac.createGain(),lp=ac.createBiquadFilter();
    o.type='sine';o.frequency.value=f;o2.type='triangle';o2.frequency.value=f*2.001;lp.type='lowpass';lp.frequency.value=2000;
    const g2=ac.createGain();g2.gain.value=.25;o2.connect(g2).connect(g);o.connect(g);g.connect(lp).connect(musicBus);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.008);g.gain.exponentialRampToValueAtTime(.0008,t+2.6);
    o.start(t);o2.start(t);o.stop(t+2.7);o2.stop(t+2.7)}
  function pad(ch,t,dur){ch.slice(0,4).forEach(m=>{[-7,7].forEach(dt=>{const o=ac.createOscillator(),g=ac.createGain(),lp=ac.createBiquadFilter();
    o.type='sawtooth';o.frequency.value=mf(m);o.detune.value=dt;lp.type='lowpass';lp.frequency.value=650;
    o.connect(lp).connect(g).connect(musicBus);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.012,t+1.6);
    g.gain.setValueAtTime(.012,t+dur-.4);g.gain.linearRampToValueAtTime(0,t+dur+1.2);o.start(t);o.stop(t+dur+1.3)})})}
  function setMusic(on,fade=.8){if(!ac)return;const g=musicBus.gain;g.cancelScheduledValues(ac.currentTime);g.setValueAtTime(g.value,ac.currentTime);g.linearRampToValueAtTime(on?.85*settings.vol:0,ac.currentTime+fade)}
  function setMode(m){if(!ac){mode=m;return}if(m===mode)return;setMusic(false,1.4);setTimeout(()=>{mode=m;step=0;setMusic(synthOn(),1.8)},1450)}
  function setSfx(on){if(sfxBus)sfxBus.gain.value=on?1:0}
  const now=()=>ac.currentTime;
  function tone(type,f,t,dur,v,f2){const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+dur);
    g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0005,t+dur);o.connect(g).connect(sfxBus);o.start(t);o.stop(t+dur+.05)}
  function burst(t,dur,v,type,freq,q=1,sweep){const s=ac.createBufferSource();s.buffer=noise;const f=ac.createBiquadFilter();f.type=type;f.frequency.setValueAtTime(freq,t);f.Q.value=q;
    if(sweep)f.frequency.exponentialRampToValueAtTime(sweep,t+dur);const g=ac.createGain();g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0005,t+dur);
    s.connect(f).connect(g).connect(sfxBus);s.start(t,Math.random());s.stop(t+dur+.05)}
  const ok=()=>ac&&settings.sfx;
  return{init,setMusic,setMode,setSfx,synthOn,
    clink(){if(!ok())return;const t=now(),k=1+Math.random()*.08;tone('sine',2600*k,t,.3,.07);tone('sine',4100*k,t,.18,.035);burst(t,.03,.08,'highpass',3000)},
    rattle(v=1){if(!ok())return;const t=now();burst(t,.05,.25*v,'bandpass',1500+Math.random()*900,3);tone('triangle',260+Math.random()*80,t,.06,.08*v)},
    shake(){if(!ok())return;const t=now();for(let i=0;i<7;i++)burst(t+i*.05,.04,.12,'bandpass',1800+Math.random()*600,4)},
    coin(){if(!ok())return;const t=now();tone('square',988,t,.12,.035);tone('square',1319,t+.08,.35,.035)},
    buy(){if(!ok())return;const t=now();burst(t,.04,.18,'bandpass',3200,5);tone('square',1175,t+.02,.1,.04);tone('square',1568,t+.1,.12,.04);tone('sine',2349,t+.2,.7,.05);tone('sine',3136,t+.2,.4,.02)},
    press(){if(!ok())return;tone('sine',520,now(),.08,.08,300)},
    notify(){if(!ok())return;const t=now();tone('sine',880,t,.22,.06);tone('sine',1320,t+.11,.35,.06)},
    pop(){if(!ok())return;const t=now();tone('sine',660,t,.09,.07,990)},
    hammer(){if(!ok())return;const t=now();[0,.16].forEach(d=>{tone('sine',150,t+d,.14,.35,55);burst(t+d,.03,.2,'bandpass',2200,2)});tone('sine',1500,t+.34,.12,.04,2300);tone('sine',1700,t+.46,.1,.03,2500)},
    factory(){if(!ok())return;const t=now();for(let i=0;i<8;i++)burst(t+i*.07,.03,.14,'bandpass',2600,6);burst(t+.5,1.1,.12,'highpass',2500,1,5000);tone('sine',90,t,.6,.12,70)},
    whoosh(){if(!ok())return;burst(now(),.5,.18,'bandpass',350,2,2600)},
    bell(){if(!ok())return;const t=now();[[1568,0],[2093,.16],[1760,.32]].forEach(([f,d])=>{tone('sine',f,t+d,1.4,.06);tone('sine',f*2.76,t+d,.6,.018)})},
    card(){if(!ok())return;burst(now(),.12,.12,'highpass',2500)},
    siren(){if(!ok())return;const t=now();for(let i=0;i<4;i++)tone('square',i%2?560:760,t+i*.16,.15,.02)},
    fanfare(){if(!ok())return;const t=now();[523,659,784,1047].forEach((f,i)=>tone('triangle',f,t+i*.12,.5,.08))}
  };
})();
const Music=(()=>{
  const el=new Audio();el.loop=true;el.preload='none';
  el.addEventListener('error',()=>{if(!el.getAttribute('src'))return;el.removeAttribute('src');
    toast(tr('این آهنگ لود نشد؛ برگشتیم سراغ موسیقی زنده‌ی بازی','Couldn\\u2019t load that track, back to the live score'),3600);
    settings.track=0;saveSettings();apply();renderPrefs()});
  el.addEventListener('playing',()=>renderPrefs());
  function apply(){const t=PLAYLIST[settings.track]||PLAYLIST[0];el.volume=Math.max(0,Math.min(1,settings.vol));
    if(!settings.music){el.pause();Snd.setMusic(false);return}
    if(t.src){Snd.setMusic(false,.5);if(el.getAttribute('src')!==t.src){el.setAttribute('src',t.src);el.load()}el.play().catch(()=>{})}
    else{el.pause();Snd.setMusic(true,1.2)}}
  function pick(k){settings.track=(k+PLAYLIST.length)%PLAYLIST.length;saveSettings();Snd.init();apply();renderPrefs()}
  return{apply,pick,el}})();
const sfx=(n)=>{if(Snd[n])Snd[n]();Room.ev('sfx',{n})};
document.addEventListener('pointerdown',()=>Snd.init(),{passive:true});

/* prefs block (language + audio), rendered into every .prefs container: main menu & in-game */
function renderPrefs(){const l=settings.lang,curT=PLAYLIST[settings.track]||PLAYLIST[0],playing=settings.music;
  document.querySelectorAll('.prefs').forEach(box=>{
    box.innerHTML=\`<div class="field"><span class="lbl">\${tr('زبان','Language')}</span><div class="seg" role="group"><button type="button" data-lang="fa" aria-pressed="\${l==='fa'}">فارسی</button><button type="button" data-lang="en" aria-pressed="\${l==='en'}">English</button></div></div>
    <label class="switch"><span>\${tr('موسیقی پس‌زمینه','Background music')}</span><input type="checkbox" data-pref="music" \${settings.music?'checked':''}></label>
    <label class="switch"><span>\${tr('افکت‌های صوتی','Sound effects')}</span><input type="checkbox" data-pref="sfx" \${settings.sfx?'checked':''}></label>
    <div class="player\${playing?'':' muted'}">
      <div class="np"><span class="eq\${playing?' on':''}" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        <div class="np-t"><small>\${playing?tr('در حال پخش','Now playing'):tr('موسیقی خاموشه','Music is off')}</small><b>\${esc(res(curT))}</b></div>
        <div class="np-nav"><button type="button" data-step="-1" aria-label="\${tr('آهنگ قبلی','Previous track')}">‹</button><button type="button" data-step="1" aria-label="\${tr('آهنگ بعدی','Next track')}">›</button></div></div>
      <ol class="tracks">\${PLAYLIST.map((t,k)=>\`<li><button type="button" data-track="\${k}" aria-pressed="\${k===settings.track}"><span class="tno">\${fa(k+1)}</span><span class="tt">\${esc(res(t))}<small>\${t.src?tr('فایل صوتی','Audio file'):tr('ساخته‌شده در لحظه','Generated live')}</small></span></button></li>\`).join('')}</ol>
      <label class="vol"><span>\${tr('بلندی صدا','Volume')}</span><input type="range" min="0" max="100" step="5" value="\${Math.round(settings.vol*100)}" data-pref="vol"></label>
    </div>\`;
    box.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{if(settings.lang===b.dataset.lang)return;settings.lang=b.dataset.lang;saveSettings();Snd.press();applyLang()});
    box.querySelector('[data-pref=music]').onchange=e=>{settings.music=e.target.checked;saveSettings();Snd.init();Music.apply();renderPrefs()};
    box.querySelector('[data-pref=sfx]').onchange=e=>{settings.sfx=e.target.checked;saveSettings();Snd.init();Snd.setSfx(settings.sfx);Snd.press()};
    box.querySelector('[data-pref=vol]').oninput=e=>{settings.vol=+e.target.value/100;saveSettings();Music.el.volume=settings.vol;if(Snd.synthOn())Snd.setMusic(true,.2)};
    box.querySelectorAll('[data-track]').forEach(b=>b.onclick=()=>{if(!settings.music){settings.music=true;saveSettings()}Music.pick(+b.dataset.track)});
    box.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>Music.pick(settings.track+ +b.dataset.step));
  })}

/* ---------------- NOTIFICATIONS (actionable toasts) ---------------- */
function notify({icon='🔔',title,body='',actions=[],ttl=8000}){const box=$('#notes'),n=document.createElement('div');n.className='note';n.setAttribute('role','alert');
  n.innerHTML=\`<span class="n-ic" aria-hidden="true">\${icon}</span><div class="n-tx"><b></b><small></small></div><div class="n-act"></div>\`;
  n.querySelector('b').textContent=res(title);n.querySelector('small').textContent=res(body);if(!body)n.querySelector('small').remove();
  let gone=false;const close=()=>{if(gone)return;gone=true;n.classList.add('bye');setTimeout(()=>n.remove(),380)};
  actions.forEach(a=>{const b=document.createElement('button');b.type='button';b.className='n-btn'+(a.cls?' '+a.cls:'');b.textContent=res(a.label);b.onclick=()=>{close();a.fn&&a.fn()};n.querySelector('.n-act').appendChild(b)});
  if(!actions.length)n.querySelector('.n-act').remove();
  box.appendChild(n);Snd.notify();if(ttl){const tm=document.createElement('i');tm.className='n-tm';tm.style.animationDuration=ttl+'ms';n.appendChild(tm);setTimeout(close,ttl)}
  while(box.children.length>4)box.firstChild.remove();return close}

/* =====================================================================
   NET · PeerJS (WebRTC, cross-device) + BroadcastChannel (same device tabs)
   Every message is sent on both transports and de-duplicated by _id.
   ===================================================================== */
let myId=store.get('mono_myid',null);
if(!myId||!/^IR-[A-Z0-9]{4,6}$/.test(myId)){myId='IR-'+Array.from({length:6},()=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[rnd(32)]).join('');store.set('mono_myid',myId)}
const CODE_RE=/^IR-[A-Z0-9]{4,6}$/;
const presence=new Set();
const Net=(()=>{
  const H={},conns=new Map(),queue=new Map(),seen=new Set(),seenQ=[];let peer=null,status='off',bc=null,libP=null;
  const PFX='monoir2-',pid=c=>PFX+c.toLowerCase(),codeOf=id=>String(id||'').replace(PFX,'').toUpperCase();
  const on=(t,f)=>(H[t]=H[t]||[]).push(f);
  function fire(msg,from){if(!msg||typeof msg.type!=='string')return;
    if(msg._id){if(seen.has(msg._id))return;seen.add(msg._id);seenQ.push(msg._id);if(seenQ.length>800)seen.delete(seenQ.shift())}
    if(from){if(msg.type==='_close'||msg.type==='_unreach')presence.delete(from);else if(msg.type[0]!=='_')presence.add(from)}
    (H[msg.type]||[]).forEach(f=>{try{f(msg,from)}catch(e){console.warn('[net]',msg.type,e)}});
    if(from&&msg.type[0]!=='_')presenceChanged()}
  const TXT={off:['آفلاین','Offline'],connecting:['در حال اتصال…','Connecting…'],online:['آنلاین','Online'],local:['فقط همین دستگاه','This device only'],taken:['کدت توی یه تب دیگه بازه','Code open in another tab']};
  const statusText=()=>tr(...(TXT[status]||TXT.off));
  function setStatus(s){status=s;document.querySelectorAll('.net').forEach(el=>{el.dataset.s=s;el.textContent=statusText()});fire({type:'_status',s})}
  function loadLib(){if(window.Peer)return Promise.resolve();if(libP)return libP;
    libP=new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';s.async=true;s.onload=()=>ok();s.onerror=()=>{libP=null;s.remove();no(new Error('peerjs'))};document.head.appendChild(s)});return libP}
  async function connect(){if(['online','connecting'].includes(status))return;setStatus('connecting');
    if(!bc&&'BroadcastChannel' in window){try{bc=new BroadcastChannel('monoir2');bc.onmessage=e=>{const m=e.data;if(m&&m.to===myId&&m.from&&m.from!==myId)fire(m.msg,m.from)}}catch(e){bc=null}}
    try{await loadLib();peer=new Peer(pid(myId),{debug:0})}catch(e){peer=null;setStatus(bc?'local':'off');return}
    peer.on('open',()=>{setStatus('online');[...queue.keys()].forEach(code=>{if(!conns.has(code))dial(code)})});
    peer.on('connection',c=>wire(c,codeOf(c.peer)));
    peer.on('disconnected',()=>{if(peer&&!peer.destroyed){setStatus('connecting');setTimeout(()=>{try{peer.reconnect()}catch(e){}},1800)}});
    peer.on('error',e=>{
      if(e.type==='peer-unavailable'){const m=String(e.message||'').match(/monoir2-([a-z0-9-]+)/i),code=m?m[1].toUpperCase():null;if(code){queue.delete(code);conns.delete(code);fire({type:'_unreach'},code)}}
      else if(e.type==='unavailable-id'){try{peer.destroy()}catch(_){}peer=null;setStatus('taken')}
      else if(['network','server-error','socket-error','socket-closed','browser-incompatible'].includes(e.type)){if(!peer||!peer.open)setStatus(bc?'local':'off')}})}
  function dial(code){if(!peer||!peer.open)return;try{wire(peer.connect(pid(code),{reliable:true,serialization:'json',metadata:{code:myId}}),code)}catch(e){}}
  function wire(c,code){conns.set(code,c);
    c.on('open',()=>{const q=queue.get(code)||[];queue.delete(code);q.forEach(m=>{try{c.send(m)}catch(e){}});fire({type:'_open'},code)});
    c.on('data',d=>{if(d&&typeof d==='object')fire(d,code)});
    c.on('close',()=>{if(conns.get(code)===c){conns.delete(code);fire({type:'_close'},code)}});
    c.on('error',()=>{})}
  function send(code,msg){if(!code||code===myId)return;msg=Object.assign({_id:rid()+Date.now().toString(36)},msg);
    if(bc)try{bc.postMessage({to:code,from:myId,msg})}catch(e){}
    const c=conns.get(code);if(c&&c.open){try{c.send(msg)}catch(e){}return}
    if(!queue.has(code))queue.set(code,[]);const q=queue.get(code);q.push(msg);if(q.length>200)q.shift();
    if(!c)dial(code)}
  return{on,connect,send,isOpen:code=>{const c=conns.get(code);return !!(c&&c.open)},get status(){return status},refresh:()=>setStatus(status)}})();
let presT;function presenceChanged(){clearTimeout(presT);presT=setTimeout(()=>{renderFriends();renderLobby()},120)}

/* ---------------- FRIENDS ---------------- */
let friends=store.get('mono_friends',[]);     // [{id,name}]
let outReq=store.get('mono_outreq',[]);       // [code]  requests I sent, not answered yet
let inReq=store.get('mono_inreq',[]);         // [{id,name}] requests waiting for me
const justAsked=new Set();
const saveF=()=>{store.set('mono_friends',friends);store.set('mono_outreq',outReq);store.set('mono_inreq',inReq);frBadge()};
function frBadge(){const b=$('#frBadge');if(!b)return;b.hidden=!inReq.length;b.textContent=fa(inReq.length)}
function addFriendLocal(code,name){const f=friends.find(x=>x.id===code);if(f){if(name)f.name=name}else friends.push({id:code,name:name||code});saveF();renderFriends()}
function requestFriend(code){code=String(code||'').trim().toUpperCase();
  if(!CODE_RE.test(code))return toast(tr('کد باید شبیه IR-7K2Q9M باشه','Code should look like IR-7K2Q9M')),false;
  if(code===myId)return toast(tr('این که کد خودته 😄','That\\u2019s your own code 😄')),false;
  if(friends.some(f=>f.id===code))return toast(tr('قبلاً دوست شدین','You\\u2019re already friends')),false;
  const inc=inReq.find(r=>r.id===code);if(inc){acceptFriend(code,inc.name);return true}
  if(!outReq.includes(code))outReq.push(code);saveF();justAsked.add(code);
  Net.connect();Net.send(code,{type:'freq',name:settings.name});sfx('pop');
  toast(tr('درخواست دوستی فرستاده شد','Friend request sent'));renderFriends();return true}
function acceptFriend(code,name){inReq=inReq.filter(r=>r.id!==code);outReq=outReq.filter(c=>c!==code);addFriendLocal(code,name);
  Net.send(code,{type:'facc',name:settings.name});sfx('coin');toast(tr(\`\${name} به دوستات اضافه شد\`,\`\${name} is now your friend\`))}
function declineFriend(code){inReq=inReq.filter(r=>r.id!==code);saveF();Net.send(code,{type:'fdec',name:settings.name});renderFriends()}
function friendToast(code,name){notify({icon:'🤝',title:{fa:\`\${name} برات درخواست دوستی فرستاد\`,en:\`\${name} sent you a friend request\`},body:code,ttl:25000,
  actions:[{label:{fa:'قبول',en:'Accept'},cls:'ok',fn:()=>acceptFriend(code,name)},{label:{fa:'رد',en:'Decline'},fn:()=>declineFriend(code)}]})}
Net.on('freq',(m,from)=>{const name=cleanName(m.name)||from;
  if(friends.some(f=>f.id===from)){addFriendLocal(from,name);Net.send(from,{type:'facc',name:settings.name});return}
  if(outReq.includes(from)){acceptFriend(from,name);return}          // we both asked: auto-match
  if(!inReq.some(r=>r.id===from)){inReq.push({id:from,name});saveF()}
  friendToast(from,name);renderFriends()});
Net.on('facc',(m,from)=>{const name=cleanName(m.name)||from,was=outReq.includes(from)||!friends.some(f=>f.id===from);
  outReq=outReq.filter(c=>c!==from);inReq=inReq.filter(r=>r.id!==from);addFriendLocal(from,name);
  if(was)notify({icon:'🎉',title:{fa:\`\${name} درخواستت رو قبول کرد\`,en:\`\${name} accepted your friend request\`},ttl:6000})});
Net.on('fdec',(m,from)=>{const name=cleanName(m.name)||from;outReq=outReq.filter(c=>c!==from);saveF();renderFriends();
  notify({icon:'🙅',title:{fa:\`\${name} فعلاً درخواستت رو قبول نکرد\`,en:\`\${name} declined your friend request\`},ttl:5000})});
Net.on('hi',(m,from)=>{if(friends.some(f=>f.id===from)){addFriendLocal(from,cleanName(m.name));if(!m.ack)Net.send(from,{type:'hi',ack:1,name:settings.name})}});
Net.on('_unreach',(m,from)=>{if(justAsked.has(from)){justAsked.delete(from);toast(tr('دوستت الان آنلاین نیست. درخواست ذخیره شد و وقتی آنلاین بشه دوباره فرستاده می‌شه.','Your friend is offline. The request is saved and will be resent when they\\u2019re online.'),4800)}
  if(Room.role==='guest'&&from===Room.host&&!Room.started){toast(tr('اتاق پیدا نشد؛ میزبان آنلاین نیست','Room not found, the host is offline'),3600);Room.reset()}});
Net.on('_status',m=>{if(m.s==='online'){friends.forEach(f=>Net.send(f.id,{type:'hi',name:settings.name}));outReq.forEach(c=>Net.send(c,{type:'freq',name:settings.name}))}});
setInterval(()=>{if(Net.status==='online')outReq.forEach(c=>Net.send(c,{type:'freq',name:settings.name}))},60000);

function renderFriends(){const el=$('#fList'),rq=$('#reqList');if(!el)return;$('#myCode').textContent=myId;frBadge();
  rq.innerHTML=inReq.length?\`<h4 class="sub-h">\${tr('درخواست‌های دوستی','Friend requests')}</h4>\`:'';
  inReq.forEach(r=>{const row=document.createElement('div');row.className='friend req';
    row.innerHTML=\`<span class="av" style="--c:var(--gold-d)">\${esc(r.name[0]||'?')}</span><div><b>\${esc(r.name)}</b><small>\${r.id}</small></div><button class="pill" type="button">\${tr('قبول','Accept')}</button><button class="pill ghost" type="button" aria-label="\${tr('رد','Decline')}">✕</button>\`;
    const [a,d]=row.querySelectorAll('button');a.onclick=()=>acceptFriend(r.id,r.name);d.onclick=()=>declineFriend(r.id);rq.appendChild(row)});
  el.innerHTML='';
  if(!friends.length&&!outReq.length){el.innerHTML=\`<p class="hint">\${tr('هنوز دوستی نداری. کد دوستت رو بالا وارد کن، یا کد خودت رو براش بفرست.','No friends yet. Enter a friend\\u2019s code above, or send them yours.')}</p>\`;return}
  friends.forEach((f,i)=>{const on=presence.has(f.id),row=document.createElement('div');row.className='friend';
    row.innerHTML=\`<span class="av" style="--c:\${PCOLORS[i%10].c}">\${esc(f.name[0]||'?')}<i class="dot\${on?' on':''}"></i></span><div><b>\${esc(f.name)}</b><small>\${f.id} · \${on?tr('آنلاین','online'):tr('آفلاین','offline')}</small></div><button class="pill" type="button">\${tr('دعوت به بازی','Invite')}</button><button class="pill ghost" type="button" aria-label="\${tr('حذف','Remove')}">✕</button>\`;
    const [inv,del]=row.querySelectorAll('button');
    inv.onclick=()=>{Room.invite(f.id);showPanel('pOnline')};
    del.onclick=()=>{if(del.dataset.arm){friends.splice(i,1);saveF();renderFriends()}else{del.dataset.arm=1;del.textContent=tr('حذف؟','Remove?')}};el.appendChild(row)});
  outReq.forEach(c=>{const row=document.createElement('div');row.className='friend pending';
    row.innerHTML=\`<span class="av" style="--c:var(--ink-3)">⏳</span><div><b>\${c}</b><small>\${tr('منتظر جواب','Waiting for reply')}</small></div><button class="pill ghost" type="button">\${tr('لغو','Cancel')}</button>\`;
    row.querySelector('button').onclick=()=>{outReq=outReq.filter(x=>x!==c);saveF();renderFriends()};el.appendChild(row)})}

/* =====================================================================
   ROOM · host-authoritative online session
   host runs the rules; guests send intents and render snapshots + events
   ===================================================================== */
const Room={role:'off',host:null,hostName:'',members:[],started:false,me:-1,syncT:0,
  emit(type,data,except){if(this.role!=='host')return;this.members.forEach(m=>{if(m.code!==except)Net.send(m.code,Object.assign({type},data||{}))})},
  ev(e,d){if(this.role==='host'&&this.started&&this.members.length)this.emit('ev',{e,d})},
  sync(){if(this.role!=='host'||!this.started||!this.members.length||!G)return;clearTimeout(this.syncT);this.syncT=setTimeout(()=>{if(G)this.emit('snap',{s:snapshot()})},40)},
  intent(a,v){Net.send(this.host,{type:'intent',a,v})},
  reset(){this.role='off';this.host=null;this.hostName='';this.members=[];this.started=false;this.me=-1;renderLobby()},
  create(){if(this.role==='guest')this.leave();this.role='host';this.host=myId;this.members=[];this.started=false;Net.connect();renderLobby()},
  join(code){code=String(code||'').trim().toUpperCase();
    if(!CODE_RE.test(code))return toast(tr('کد اتاق باید شبیه IR-7K2Q9M باشه','Room code should look like IR-7K2Q9M'));
    if(code===myId)return toast(tr('این اتاق خودته؛ «ساختن اتاق» رو بزن','That\\u2019s your own code, create a room instead'));
    if(G)backToMenu();if(this.role!=='off')this.leave();
    this.role='guest';this.host=code;this.members=[];this.started=false;this.me=-1;Net.connect();
    Net.send(code,{type:'join',name:settings.name,icon:settings.icon});renderLobby();showPanel('pOnline')},
  leave(){if(this.role==='guest')Net.send(this.host,{type:'leave'});if(this.role==='host')this.emit('closed',{});this.reset()},
  invite(code){if(this.role==='guest'){toast(tr('وقتی مهمون یه اتاقی نمی‌تونی دعوت کنی','You can\\u2019t invite while you\\u2019re a guest'));return}
    if(this.role!=='host')this.create();Net.send(code,{type:'invite',name:settings.name});
    const f=friends.find(x=>x.id===code);toast(tr(\`دعوت‌نامه برای \${f?f.name:code} رفت\`,\`Invite sent to \${f?f.name:code}\`))},
  lobby(){this.emit('lobby',{host:{code:myId,name:settings.name},members:this.members})}
};
// ---- host side
Net.on('join',(m,from)=>{if(Room.role!=='host')return Net.send(from,{type:'join-no',why:'noroom'});
  if(Room.started)return Net.send(from,{type:'join-no',why:'started'});
  if(Room.members.length>=9)return Net.send(from,{type:'join-no',why:'full'});
  const name=cleanName(m.name)||from,ex=Room.members.find(x=>x.code===from);
  if(ex)ex.name=name;else{Room.members.push({code:from,name,icon:ICONS[m.icon]?m.icon:'horse'});notify({icon:'🚪',title:{fa:\`\${name} اومد توی اتاق\`,en:\`\${name} joined your room\`},ttl:4000})}
  Room.lobby();renderLobby()});
Net.on('leave',(m,from)=>{if(Room.role!=='host')return;const mem=Room.members.find(x=>x.code===from);Room.members=Room.members.filter(x=>x.code!==from);
  if(Room.started)dropRemote(from);else{Room.lobby();renderLobby();if(mem)toast(tr(\`\${mem.name} از اتاق رفت\`,\`\${mem.name} left the room\`))}});
Net.on('_close',(m,from)=>{if(Room.role==='host'&&Room.started&&Room.members.some(x=>x.code===from)){Room.members=Room.members.filter(x=>x.code!==from);dropRemote(from)}
  if(Room.role==='guest'&&from===Room.host&&Room.started)hostGone()});
Net.on('intent',(m,from)=>{if(Room.role!=='host'||!G||G.over)return;const p=G.players.find(x=>x.remote===from);if(!p||p.out)return;
  if(m.a==='cardok'){if(p.id===G.turn&&G.cardDone)G.cardDone();return}
  if(p.id!==G.turn)return;runAct(m.a,m.v,p)});
Net.on('chat',(m,from)=>{const msg=m.m;if(!msg||typeof msg.text!=='string')return;
  if(Room.role==='host'&&Room.members.some(x=>x.code===from)){const p=G&&G.players.find(x=>x.remote===from);
    const clean={id:String(msg.id||rid()).slice(0,20),name:p?p.name:cleanName(msg.name),color:p?p.color:'var(--ink-3)',text:msg.text.slice(0,240),ts:Date.now(),from};
    Chat.add(clean);Room.emit('chat',{m:clean},from)}
  else if(Room.role==='guest'&&from===Room.host&&msg.from!==myId)Chat.add(msg)});
function dropRemote(code){if(!G)return;const p=G.players.find(x=>x.remote===code);if(!p)return;p.remote=null;p.bot=true;
  toastAll(l=>L(l,\`\${p.name} قطع شد؛ یه ربات جاش بازی می‌کنه\`,\`\${p.name} disconnected, a bot takes over\`),3600);
  if(cur()===p){if(G.choice)choose(false);else if(G.cardDone)G.cardDone();else if(!G.busy)setTimeout(botStep,700)}renderAll()}
// ---- guest side
const fromHost=(from)=>Room.role==='guest'&&from===Room.host;
Net.on('lobby',(m,from)=>{if(!fromHost(from))return;Room.hostName=cleanName(m.host&&m.host.name);Room.members=(m.members||[]).map(x=>({code:x.code,name:cleanName(x.name),icon:x.icon}));renderLobby()});
Net.on('join-no',(m,from)=>{if(!fromHost(from))return;
  toast({noroom:tr('این کد الان اتاق باز نداره','That player hasn\\u2019t opened a room'),started:tr('بازیشون شروع شده، دفعه‌ی بعد!','Their game already started'),full:tr('اتاق پره','Room is full')}[m.why]||'✕',3600);Room.reset()});
Net.on('start',(m,from)=>{if(!fromHost(from)||!m.snap)return;Room.started=true;Room.me=m.snap.players.findIndex(p=>p.remote===myId);if(Room.me<0){Room.reset();return}guestStart(m.snap)});
Net.on('snap',(m,from)=>{if(!fromHost(from)||!G||!m.s)return;applySnap(m.s)});
Net.on('ev',(m,from)=>{if(!fromHost(from)||!G)return;guestEv(m.e,m.d||{})});
Net.on('closed',(m,from)=>{if(!fromHost(from))return;if(Room.started)hostGone();else{toast(tr('میزبان اتاق رو بست','The host closed the room'));Room.reset()}});
function hostGone(){notify({icon:'📴',title:{fa:'اتصال به میزبان قطع شد',en:'Lost connection to the host'},body:{fa:'بازی آنلاین تموم شد.',en:'The online game has ended.'},ttl:7000});Room.reset();if(G)backToMenu()}
// ---- invites (anyone)
Net.on('invite',(m,from)=>{const name=cleanName(m.name)||from;
  notify({icon:'🎲',title:{fa:\`\${name} دعوتت کرد به بازی\`,en:\`\${name} invited you to a game\`},body:{fa:'اتاق '+from,en:'Room '+from},ttl:30000,
    actions:[{label:{fa:'بریم!',en:'Join'},cls:'ok',fn:()=>Room.join(from)},{label:{fa:'الان نه',en:'Not now'}}]})});

function renderLobby(){const el=$('#lobby');if(!el)return;
  const av=(name,i,extra='')=>\`<span class="av" style="--c:\${PCOLORS[i%10].c}">\${esc((name||'?')[0])}</span><div><b>\${esc(name)}</b>\${extra}</div>\`;
  if(Room.role==='off'){
    el.innerHTML=\`<p class="hint">\${tr('یه اتاق بساز و دوستات رو دعوت کن، یا با کد یه اتاق بهش بپیوند. بازی رو میزبان اجرا می‌کنه و همه هم‌زمان می‌بینن.','Open a room and invite friends, or join one by code. The host runs the game and everyone sees it live.')}</p>
      <button class="mbtn blue" type="button" id="oCreate"><span class="ic">🏠</span><span><b>\${tr('ساختن اتاق','Create a room')}</b><small>\${tr('HOST','میزبان')}</small></span></button>
      <div class="addf" id="oJoinF"><input type="text" id="oJoin" placeholder="IR-XXXXXX" dir="ltr" autocomplete="off" aria-label="\${tr('کد اتاق','Room code')}"><button class="pill" type="button" id="oJoinB">\${tr('بپیوند','Join')}</button></div>\`;
    $('#oCreate').onclick=()=>{Snd.press();Room.create()};
    onSubmit($('#oJoin'),$('#oJoinB'),()=>{Snd.press();Room.join($('#oJoin').value)});return}
  if(Room.role==='host'){
    const inv=friends.filter(f=>!Room.members.some(m=>m.code===f.id));
    el.innerHTML=\`<div class="roomcode"><small>\${tr('کد اتاق تو','Your room code')}</small><b dir="ltr">\${myId}</b></div>
      <div class="seats"><div class="friend">\${av(settings.name,0,\`<small>\${tr('میزبان · تو','Host · you')}</small>\`)}</div>
      \${Room.members.map((m,i)=>\`<div class="friend">\${av(m.name,i+1,\`<small>\${m.code} · \${Net.isOpen(m.code)||presence.has(m.code)?tr('وصل','connected'):tr('در حال اتصال','linking')}</small>\`)}</div>\`).join('')}
      \${Room.members.length?'':\`<p class="hint">\${tr('هنوز کسی نیومده. کد رو بفرست یا از پایین دعوت کن.','Nobody here yet. Share the code or invite below.')}</p>\`}</div>
      \${inv.length?\`<h4 class="sub-h">\${tr('دعوت از دوستان','Invite friends')}</h4><div class="invrow">\${inv.map(f=>\`<button class="chipbtn\${presence.has(f.id)?' on':''}" type="button" data-inv="\${f.id}"><i class="dot\${presence.has(f.id)?' on':''}"></i>\${esc(f.name)}</button>\`).join('')}</div>\`:''}
      <p class="hint">\${settings.bots?tr(\`صندلی‌های خالی تا \${fa(settings.players)} نفر با ربات پر می‌شن.\`,\`Empty seats up to \${fa(settings.players)} are filled with bots.\`):tr('ربات‌ها خاموشن؛ فقط آدم‌ها بازی می‌کنن.','Bots are off; humans only.')}</p>
      <div class="row wrap"><button class="pill" type="button" id="oGoC">🎲 \${tr('شروع کلاسیک','Start classic')}</button><button class="pill ind" type="button" id="oGoI">🏭 \${tr('شروع صنعتی','Start industrial')}</button><button class="pill ghost" type="button" id="oClose">\${tr('بستن اتاق','Close room')}</button></div>\`;
    el.querySelectorAll('[data-inv]').forEach(b=>b.onclick=()=>Room.invite(b.dataset.inv));
    $('#oGoC').onclick=()=>startWith('classic');$('#oGoI').onclick=()=>startWith('ind');$('#oClose').onclick=()=>{Room.leave()};return}
  el.innerHTML=\`<div class="roomcode"><small>\${tr('مهمون اتاق','Guest in room')}</small><b dir="ltr">\${Room.host}</b></div>
    <div class="seats">\${Room.hostName?\`<div class="friend">\${av(Room.hostName,0,\`<small>\${tr('میزبان','Host')}</small>\`)}</div>\`:''}
    \${Room.members.map((m,i)=>\`<div class="friend">\${av(m.name,i+1,m.code===myId?\`<small>\${tr('تو','you')}</small>\`:'')}</div>\`).join('')}</div>
    <p class="thinking">\${Room.hostName?tr('منتظر میزبان که بازی رو شروع کنه','Waiting for the host to start'):tr('در حال در زدن','Knocking')}</p>
    <div class="row"><button class="pill ghost" type="button" id="oLeave">\${tr('ترک اتاق','Leave room')}</button></div>\`;
  $('#oLeave').onclick=()=>Room.leave()}

/* ---------------- MENU ---------------- */
(function lights(){const el=$('#lights'),cols=['oklch(88% 0.14 90)','oklch(80% 0.14 30)','oklch(82% 0.12 150)','oklch(80% 0.1 250)'];
  for(let i=0;i<16;i++){const b=document.createElement('i');b.style.left=(i*6.4+2)+'%';b.style.top=(Math.sin(i*.75)*12+14)+'px';b.style.setProperty('--c',cols[i%4]);b.style.setProperty('--d',(i*.37)+'s');el.appendChild(b)}})();
function showPanel(id){document.querySelectorAll('.menu-panel').forEach(p=>p.classList.toggle('out',p.id!==id));
  if(id==='pFriends'){Net.connect();renderFriends()}if(id==='pOnline'){Net.connect();renderLobby()}if(id==='pSettings')fillSettings()}
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>{Snd.press();showPanel(b.dataset.open)}));
document.querySelectorAll('[data-back]').forEach(b=>b.addEventListener('click',()=>{Snd.press();saveSettings();showPanel('pMain')}));
function fillSettings(){
  $('#sName').value=settings.name;$('#pCount').textContent=fa(settings.players);$('#sBots').checked=settings.bots;
  $('#sMoney').value=settings.money;$('#sInf').value=settings.inflation;$('#sYear').value=settings.yearMin;$('#sTrade').value=settings.tradeMin;$('#sSell').value=settings.sellRate;
  const ic=$('#sIcons');ic.innerHTML='';ICON_KEYS.forEach(k=>{const b=document.createElement('button');b.type='button';b.textContent=ICONS[k];b.setAttribute('aria-pressed',k===settings.icon);
    b.onclick=()=>{settings.icon=k;fillSettings()};ic.appendChild(b)});outs();renderPrefs()}
function outs(){$('#oMoney').textContent=fa(settings.money)+tr(' میلیون',' M');$('#oInf').textContent=fa(settings.inflation)+tr('٪','%');
  $('#oYear').textContent=fa(settings.yearMin)+tr(' دقیقه',' min');$('#oTrade').textContent=tr('هر '+fa(settings.tradeMin)+' دقیقه','every '+fa(settings.tradeMin)+' min');$('#oSell').textContent=fa(settings.sellRate)+tr('٪','%')}
$('#sName').oninput=e=>{settings.name=cleanName(e.target.value)||tr('بازیکن ۱','Player 1')};
$('#pMinus').onclick=()=>{settings.players=Math.max(2,settings.players-1);$('#pCount').textContent=fa(settings.players)};
$('#pPlus').onclick=()=>{settings.players=Math.min(10,settings.players+1);$('#pCount').textContent=fa(settings.players)};
$('#sBots').onchange=e=>settings.bots=e.target.checked;
$('#sMoney').oninput=e=>{settings.money=+e.target.value;outs()};
$('#sInf').oninput=e=>{settings.inflation=+e.target.value;outs()};
$('#sYear').oninput=e=>{settings.yearMin=+e.target.value;outs()};
$('#sTrade').oninput=e=>{settings.tradeMin=+e.target.value;outs()};
$('#sSell').oninput=e=>{settings.sellRate=+e.target.value;outs()};

async function copy(txt){try{await navigator.clipboard.writeText(txt);return true}catch(e){return false}}
const inviteLink=()=>location.href.split(/[?#]/)[0]+'?friend='+myId;
$('#copyCode').onclick=async()=>{toast(await copy(myId)?tr('کد کپی شد','Code copied'):myId)};
$('#shareCode').onclick=async()=>{const link=inviteLink();
  if(navigator.share){try{await navigator.share({title:tr('مونوپولی ایرانی','Monopoly Irani'),text:tr('بیا دوست بشیم و مونوپولی بازی کنیم! کد من: ','Let\\u2019s play Monopoly! My code: ')+myId,url:link});return}catch(e){}}
  toast(await copy(link)?tr('لینک دعوت کپی شد','Invite link copied'):link,4000)};
onSubmit($('#fCode'),$('#addBtn'),()=>{if(requestFriend($('#fCode').value))$('#fCode').value=''});
(function deepLinks(){const q=location.search,fr=q.match(/[?&](?:friend|invite)=(IR-[A-Z0-9]{4,6})/i),rm=q.match(/[?&]room=(IR-[A-Z0-9]{4,6})/i);
  if(fr){const code=fr[1].toUpperCase();if(code!==myId&&!friends.some(f=>f.id===code)){setTimeout(()=>{requestFriend(code);toast(tr('درخواست دوستی برای '+code+' فرستاده شد 🎲','Friend request sent to '+code+' 🎲'),3500)},700)}}
  if(rm)setTimeout(()=>Room.join(rm[1]),900);
  if(friends.length||outReq.length||inReq.length)Net.connect()})();

function startWith(mode){
  Snd.init();Snd.press();saveSettings();
  document.querySelectorAll('.menu-panel').forEach(p=>p.classList.add('out'));
  $('#room').classList.add('dive');$('#veil').classList.add('on');Snd.setMode('game');
  setTimeout(()=>startGame(mode),3500)}
$('#bStart').onclick=()=>startWith('classic');
$('#bStartInd').onclick=()=>startWith('ind');
function backToMenu(){
  if(Room.role==='host'&&Room.started){Room.emit('closed',{});Room.reset()}else if(Room.role==='guest'&&Room.started)Room.leave();
  hideDeed();G=null;closeChat();$('#gMenu').hidden=true;$('#game').classList.remove('active');$('#menu').classList.add('active');
  $('#room').classList.remove('dive');$('#veil').classList.remove('on');showPanel('pMain');Snd.setMode('menu');
  ['#tradeDlg','#setDlg'].forEach(s=>{if($(s).open)$(s).close()})}

/* =====================================================================
   BOARD GEOMETRY · 11 tiles per side
   ===================================================================== */
const B=980,C=110,S=(B-2*C)/(SIDE-1);
function tileRect(i){let x,y,w,h,rot;const k=i%SIDE,side=Math.floor(i/SIDE),corner=k===0;
  if(side===0){rot=0;if(corner){x=B-C;y=B-C;w=h=C}else{x=B-C-k*S;y=B-C;w=S;h=C}}
  else if(side===1){rot=90;if(corner){x=0;y=B-C;w=h=C}else{x=0;y=B-C-k*S;w=C;h=S}}
  else if(side===2){rot=180;if(corner){x=0;y=0;w=h=C}else{x=C+(k-1)*S;y=0;w=S;h=C}}
  else{rot=270;if(corner){x=B-C;y=0;w=h=C}else{x=B-C;y=C+(k-1)*S;w=C;h=S}}
  return{cx:x+w/2,cy:y+h/2,rot,lw:corner?C:S,lh:C,corner}}
function l2w(i,lx,ly){const r=tileRect(i),a=r.rot*Math.PI/180;return[r.cx+lx*Math.cos(a)-ly*Math.sin(a),r.cy+lx*Math.sin(a)+ly*Math.cos(a)]}
const tileEls=[];
function buildBoard(){
  const face=$('#face');face.querySelectorAll('.tile').forEach(t=>t.remove());tileEls.length=0;
  TILES.forEach((t,i)=>{const r=tileRect(i),el=document.createElement('div');
    el.className='tile '+(r.corner?'corner':t.t==='prop'?'prop':'sp');el.dataset.i=i;
    Object.assign(el.style,{left:(r.cx-r.lw/2)+'px',top:(r.cy-r.lh/2)+'px',width:r.lw+'px',height:r.lh+'px',transform:\`rotate(\${r.rot}deg)\`});
    if(t.t==='prop')el.innerHTML=\`<div class="band" style="--gc:\${GROUPS[t.g].c}"></div><div class="t-ico">\${t.ic}</div><div class="t-name">\${tn(i)}</div><div class="t-price"></div><div class="own"></div>\`;
    else el.innerHTML=\`<div class="t-big">\${t.icon}</div><div class="t-name">\${tn(i)}</div>\${t.t==='start'?'<div class="t-sub"></div>':''}\`;
    el.onclick=e=>{e.stopPropagation();showTileInfo(i)};face.appendChild(el);tileEls[i]=el});
  const lg=$('#face .logo');lg.innerHTML=tr('مونوپولی','Monopoly')+\`<small>\${tr('جنوب شهر ← شمال شهر','South Tehran → North Tehran')}</small>\`;
  $('#face .deck.chance').textContent=tr('شانس','Chance');$('#face .deck.chest').textContent=tr('صندوق','Chest')}
function refreshTiles(){if(!G||!tileEls.length)return;TILES.forEach((t,i)=>{const el=tileEls[i];
  if(t.t==='prop'){el.querySelector('.t-price').textContent=short(price(i));const o=G.props[i].owner;
    if(o>=0){el.dataset.owner=o;el.style.setProperty('--oc',G.players[o].color)}else{delete el.dataset.owner}
    el.classList.toggle('mark',G.landed===i&&G.props[i].owner===G.turn&&!G.bought&&!G.over)}
  if(t.t==='start')el.querySelector('.t-sub').textContent='+'+short(startBonus())})}

/* ---------------- ECONOMY ---------------- */
let G=null;
const cur=()=>G.players[G.turn];
const price=i=>r10k(TILES[i].price*G.infl);
const houseCost=i=>r10k(TILES[i].price*CONFIG.houseRate*G.infl);
const factoryCost=i=>r10k(TILES[i].price*CONFIG.factoryRate*G.infl);
const factoryYield=i=>r10k(TILES[i].price*CONFIG.factoryYield*G.infl);
const startBonus=()=>r10k(CONFIG.startBonus*G.infl);
const jailFine=()=>r10k(CONFIG.jailFine*G.infl);
const groupTiles=g=>TILES.map((t,i)=>t.g===g?i:-1).filter(i=>i>=0);
const ownsSet=(pid,g)=>groupTiles(g).every(i=>G.props[i].owner===pid);
function rent(i){const p=G.props[i],t=TILES[i],base=t.price*CONFIG.rentBase*G.infl;
  if(p.factory)return r10k(base*CONFIG.factoryMult);
  if(p.houses)return r10k(base*CONFIG.rentMult[p.houses]);
  return r10k(base*(ownsSet(p.owner,t.g)?CONFIG.setBonus:1))}
function assetValue(i){const p=G.props[i];return price(i)+p.houses*houseCost(i)+(p.factory?4*houseCost(i)+factoryCost(i):0)}
const sellValue=i=>r10k(assetValue(i)*G.cfg.sellRate/100);
const owned=pid=>TILES.map((t,i)=>t.t==='prop'&&G.props[i].owner===pid?i:-1).filter(i=>i>=0);
const netWorth=p=>p.cash+owned(p.id).reduce((s,i)=>s+assetValue(i),0);

/* ---------------- PURCHASE RULE (v2) ----------------
   One purchase per turn (land, house OR factory), and upgrades only on the tile
   the player landed on this turn. G.bought / G.landed reset in startTurn().     */
function upgradeKind(i){const pr=G.props[i];if(!pr||pr.owner<0||pr.factory)return null;if(pr.houses<4)return'house';return G.mode==='ind'?'factory':null}
function canUpgradeNow(i){if(!G||G.over||G.bought||G.landed!==i)return false;const pr=G.props[i];return !!pr&&pr.owner===G.turn}

/* ---------------- CARDS ---------------- */
const VANAK=IDX('Vanak'),NIAVARAN=IDX('Niavaran'),DARBAND=IDX('Darband');
const CHANCE=[
 {txt:{fa:'یارانه واریز شد! ۳۰۰ هزار تومان مال توئه.',en:'Subsidy landed! 300K Toman is yours.'},f:p=>gain(p,300000)},
 {txt:{fa:'پراید رو به قیمت روز فروختی و سود کردی.',en:'You sold your old Pride at today\\u2019s price. Profit!'},f:p=>gain(p,1500000)},
 {txt:{fa:'برو ونک، یه بستنی بخور. اگه از شروع رد شدی جایزه‌ات رو بگیر.',en:'Head to Vanak for ice cream. Collect GO money if you pass it.'},f:p=>moveTo(p,VANAK)},
 {txt:{fa:'دوربین سرعت‌سنج همت ازت عکس یادگاری گرفت.',en:'The Hemmat highway speed camera took a souvenir photo of you.'},f:p=>lose(p,400000)},
 {txt:{fa:'چکت برگشت خورد! مستقیم برو زندان.',en:'Your cheque bounced! Go straight to jail.'},f:p=>sendToJail(p)},
 {txt:{fa:'برو به خانه‌ی شروع و جایزه بگیر.',en:'Advance to GO and collect your bonus.'},f:p=>moveTo(p,0)},
 {txt:{fa:'ترافیک قفله. سه خانه برگرد.',en:'Total gridlock. Go back three spaces.'},f:async p=>{await moveSteps(p,-3);await land(p)}},
 {txt:{fa:'ارز دیجیتالت یهو ده برابر شد!',en:'Your crypto just went 10x!'},f:p=>gain(p,2000000)},
 {txt:{fa:'برو نیاوران یه سر به کاخ بزن.',en:'Take a trip to Niavaran Palace.'},f:p=>moveTo(p,NIAVARAN)},
 {txt:{fa:'با تله‌کابین توچال رفتی دربند؛ یه چای قندپهلو مهمون خودت.',en:'Rode the Tochal cable car to Darband. Tea is on you.'},f:p=>moveTo(p,DARBAND)}
];
const CHEST=[
 {txt:{fa:'عیدی مادربزرگ رسید، اونم نو و تا نخورده.',en:'Grandma\\u2019s Nowruz gift arrived, crisp new notes.'},f:p=>gain(p,500000)},
 {txt:{fa:'مهمونی خونه‌ات بود، ۲۵ نفر بی‌خبر اومدن.',en:'Party at your place. 25 surprise guests showed up.'},f:p=>lose(p,600000)},
 {txt:{fa:'وام ازدواج تصویب شد! (بعد از دو سال)',en:'Marriage loan approved! (after two years)'},f:p=>gain(p,2000000)},
 {txt:{fa:'قسط وام رسید. مثل همیشه.',en:'Loan instalment due. As always.'},f:p=>lose(p,800000)},
 {txt:{fa:'تولدته! از هر بازیکن ۲۰۰ هزار تومان شیرینی بگیر.',en:'It\\u2019s your birthday! Collect 200K from every player.'},f:async p=>{for(const o of G.players)if(!o.out&&o!==p)await pay(o,r10k(200000*G.infl),p)}},
 {txt:{fa:'کولر خراب شد و تعمیرکار سه برابر حساب کرد.',en:'The AC broke and the repairman charged triple.'},f:p=>lose(p,700000)},
 {txt:{fa:'کارت آزادی از زندان (پارتی داری!). نگهش دار.',en:'Get Out of Jail Free (you know people!). Keep it.'},f:p=>{p.jailFree++;renderPlayers()}},
 {txt:{fa:'بازسازی اجباری: برای هر خانه ۱۰۰ هزار و هر کارخانه ۴۰۰ هزار بده.',en:'Mandatory renovation: pay 100K per house, 400K per factory.'},f:p=>{let s=0;owned(p.id).forEach(i=>{s+=G.props[i].factory?400000:G.props[i].houses*100000});return s?lose(p,s):null}}
];
const gain=(p,base)=>{const a=r10k(base*G.infl);p.cash+=a;floatMoney(p,a);sfx('coin');renderPlayers()};
const lose=(p,base)=>pay(p,r10k(base*G.infl));

/* ---------------- NEW GAME ---------------- */
function newState(mode){return{mode:mode||'classic',players:[],props:{},turn:0,phase:'busy',dbl:0,year:1400,yearT:0,infl:1,tradeT:0,tradeOpen:false,tradeLeft:0,over:false,busy:false,
  choice:null,cardDone:null,offer:null,cam:0,zoom:1,focus:1,bought:false,landed:-1,
  cfg:{inflation:settings.inflation,yearMin:settings.yearMin,tradeMin:settings.tradeMin,sellRate:settings.sellRate}}}
function snapshot(){const g=G;return{mode:g.mode,players:g.players,props:g.props,turn:g.turn,phase:g.phase,dbl:g.dbl,year:g.year,yearT:g.yearT,infl:g.infl,
  tradeT:g.tradeT,tradeOpen:g.tradeOpen,tradeLeft:g.tradeLeft,over:g.over,busy:g.busy,bought:g.bought,landed:g.landed,offer:g.offer,cfg:g.cfg}}
function startGame(mode){
  const online=Room.role==='host',startCash=settings.money*1e6,iconStart=Math.max(0,ICON_KEYS.indexOf(settings.icon));
  G=newState(mode);
  const seats=[{name:settings.name,icon:settings.icon}];
  if(online)Room.members.slice(0,9).forEach(m=>seats.push({name:m.name,remote:m.code,icon:m.icon}));
  const want=online?(settings.bots?Math.max(settings.players,seats.length):seats.length):settings.players;
  for(let i=seats.length;i<Math.max(2,want)&&i<10;i++)seats.push({bot:online?true:(settings.bots&&i>0)});
  seats.forEach((s,i)=>{const col=PCOLORS[i];
    const name=s.name||(s.bot?tr('ربات ','Bot ')+res(col):tr('بازیکن ','Player ')+res(col));
    const icon=s.icon&&ICONS[s.icon]&&i>0?ICONS[s.icon]:ICONS[ICON_KEYS[(iconStart+i)%5]];
    G.players.push({id:i,name,auto:s.name?null:(s.bot?'bot':'seat'),color:col.c,white:!!col.white,icon,cash:startCash,pos:0,jail:0,jailFree:0,laps:0,out:false,bot:!!s.bot,remote:s.remote||null})});
  TILES.forEach((t,i)=>{if(t.t==='prop')G.props[i]={owner:-1,houses:0,factory:false}});
  enterGame();
  if(online){Room.started=true;Room.emit('start',{snap:snapshot()})}
  log(l=>L(l,'سال ۱۴۰۰. بازار مسکن باز شد. هر کی زودتر بخره برنده‌ست.','Year 1400. The housing market is open. Early buyers win.'));
  if(G.mode==='ind')log(l=>L(l,'🏭 مود صنعتی: کارخانه‌ها آخر هر دور کاملِ مالک، خودکار درآمد تولید می‌کنن!','🏭 Industrial mode: factories pay out every time their owner completes a lap!'));
  setTimeout(startTurn,1400)}
function enterGame(){
  buildBoard();buildTokens();buildDice();clearBuildings();
  $('#log').innerHTML='';$('#players').innerHTML='';['#tileInfo','#winOv','#cardOv','#deedOv','#gMenu'].forEach(s=>$(s).hidden=true);
  $('#modeBadge').hidden=G.mode!=='ind';$('#calPage').textContent=yr(G.year);Chat.reset();
  const board=$('#board');board.classList.add('intro');board.style.setProperty('--cam','0deg');
  $('#menu').classList.remove('active');$('#game').classList.add('active');fit();
  requestAnimationFrame(()=>requestAnimationFrame(()=>board.classList.remove('intro')));
  renderAll()}
function guestStart(s){Snd.init();Snd.setMode('game');document.querySelectorAll('.menu-panel').forEach(p=>p.classList.add('out'));
  G=newState(s.mode);Object.assign(G,s);enterGame();for(const i in G.props)renderBuildings(+i);
  notify({icon:'🌐',title:{fa:'بازی آنلاین شروع شد',en:'Online game started'},body:{fa:'تو '+G.players[Room.me].name+' هستی',en:'You are '+G.players[Room.me].name},ttl:4500})}
function applySnap(s){if(!G)return;const wasOver=G.over;Object.assign(G,s);renderAll();for(const i in G.props)renderBuildings(+i);$('#calPage').textContent=yr(G.year);if(G.over&&!wasOver&&$('#winOv').hidden){}}

/* ---------------- TOKENS ---------------- */
const tokEls=[];
function stoneHTML(p){return\`<div class="stone\${p.white?' white':''}" style="--pc:\${p.color}"><i>\${p.icon}</i></div>\`}
function buildTokens(){const Lr=$('#tokLayer');Lr.innerHTML='';tokEls.length=0;
  G.players.forEach(p=>{const el=document.createElement('div');el.className='bb tok';
    el.innerHTML=\`<div class="shadow"></div><div class="bb-rot"><div class="hop">\${stoneHTML(p)}</div></div>\`;Lr.appendChild(el);tokEls[p.id]=el});
  placeAll()}
function slot(i,idx){const r=tileRect(i);
  if(r.corner)return l2w(i,((idx%4)-1.5)*20,4+Math.floor(idx/4)*18);
  return l2w(i,((idx%5)-2)*13,12+Math.floor(idx/5)*20)}
function placeAll(){if(!G)return;const by={};G.players.forEach(p=>{if(p.out)return;(by[p.pos]=by[p.pos]||[]).push(p)});
  G.players.forEach(p=>{const el=tokEls[p.id];if(!el)return;if(p.out){el.style.display='none';return}
    const list=by[p.pos],[x,y]=slot(p.pos,list.indexOf(p));el.style.transform=\`translate3d(\${x}px,\${y}px,0)\`;el.classList.toggle('turn',p.id===G.turn)})}
function hopTo(p){const el=tokEls[p.id];if(!el)return;const [x,y]=slot(p.pos,0);el.style.transform=\`translate3d(\${x}px,\${y}px,0)\`;
  el.querySelector('.hop').animate([{transform:'translateY(0)'},{transform:'translateY(-26px)',offset:.45},{transform:'translateY(0)'}],{duration:250,easing:'cubic-bezier(.33,0,.4,1)'});
  setTimeout(()=>Snd.clink(),230);Room.ev('hop',{pid:p.id,pos:p.pos})}

/* ---------------- BUILDINGS ---------------- */
const bld={};
function clearBuildings(){$('#bldLayer').innerHTML='';for(const k in bld)delete bld[k]}
function bbEl(x,y,inner){const el=document.createElement('div');el.className='bb';el.style.transform=\`translate3d(\${x}px,\${y}px,0)\`;el.innerHTML=\`<div class="bb-rot">\${inner}</div>\`;$('#bldLayer').appendChild(el);return el}
const HOUSE_SLOTS=[[-13,-52],[11,-52],[-13,-37],[11,-37]];
function addDust(bb){const d=document.createElement('div');d.className='dust';bb.insertBefore(d,bb.firstChild);setTimeout(()=>d.remove(),1150)}
const HOUSE_HTML=anim=>\`<div class="house\${anim==='house'?' drop':''}"><i class="hr"></i><i class="hb"></i><i class="hs"></i><i class="hd"></i><i class="hw w1"></i><i class="hw w2"></i></div>\`;
function renderBuildings(i,anim){
  const p=G.props[i];if(!p)return;bld[i]=bld[i]||{houses:[],factory:null};const b=bld[i];
  if(anim)Room.ev('bld',{i,prop:p,anim});
  if(anim==='factory'){b.houses.forEach(h=>h.querySelector('.house').classList.add('dissolve'));const old=b.houses;b.houses=[];
    setTimeout(()=>{old.forEach(h=>h.remove());if(!G||!G.props[i]||!G.props[i].factory)return;if(b.factory){b.factory.remove();b.factory=null}const [x,y]=l2w(i,0,-40);
      b.factory=bbEl(x,y,'<div class="factory drop"><div class="f-chim"></div><div class="f-body"></div><span class="f-gear">⚙</span><span class="smoke"></span><span class="smoke"></span></div>');addDust(b.factory)},650);return}
  if(!p.factory&&b.factory){b.factory.remove();b.factory=null}
  if(p.factory&&!b.factory){b.houses.forEach(h=>h.remove());b.houses=[];const [x,y]=l2w(i,0,-40);b.factory=bbEl(x,y,'<div class="factory"><div class="f-chim"></div><div class="f-body"></div><span class="f-gear">⚙</span><span class="smoke"></span><span class="smoke"></span></div>')}
  while(b.houses.length>p.houses)b.houses.pop().remove();
  while(b.houses.length<p.houses){const k=b.houses.length,[x,y]=l2w(i,...HOUSE_SLOTS[k]);const e=bbEl(x,y,HOUSE_HTML(anim));if(anim==='house')addDust(e);b.houses.push(e)}}

/* ---------------- DICE (hand-rolled physics) ---------------- */
const DICE=[];const BOWL={x:B/2,y:B/2+10,r:104};
const FACE_T={1:'translateZ(17px)',6:'rotateX(180deg) translateZ(17px)',2:'rotateX(90deg) translateZ(17px)',5:'rotateX(-90deg) translateZ(17px)',3:'rotateY(90deg) translateZ(17px)',4:'rotateY(-90deg) translateZ(17px)'};
const FACE_UP={1:[0,0],6:[180,0],2:[-90,0],5:[90,0],3:[0,-90],4:[0,90]};
const PIPS={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};
function buildDice(){const Lr=$('#diceLayer');Lr.innerHTML='';DICE.length=0;
  [-28,28].forEach((dx,k)=>{const el=document.createElement('div');el.className='die';const cube=document.createElement('div');cube.className='cube';
    for(let v=1;v<=6;v++){const f=document.createElement('div');f.className='fc';f.dataset.v=v;f.style.transform=FACE_T[v];
      for(let c=1;c<=9;c++){const s=document.createElement('span');if(!PIPS[v].includes(c))s.style.visibility='hidden';f.appendChild(s)}cube.appendChild(f)}
    el.appendChild(cube);Lr.appendChild(el);const d={el,cube,x:dx,y:0,z:0,ax:0,ay:0,az:k*25};DICE.push(d);drawDie(d)})}
function drawDie(d){d.el.style.transform=\`translate3d(\${BOWL.x+d.x}px,\${BOWL.y+d.y}px,\${17+d.z}px)\`;d.cube.style.transform=\`rotateZ(\${d.az}deg) rotateX(\${d.ax}deg) rotateY(\${d.ay}deg)\`}
function rollDice(forced){return new Promise(res=>{const q=DICE._q;
  const vals=forced||(q&&q.length>=2?[q.shift(),q.shift()]:[1+rnd(6),1+rnd(6)]);if(!forced&&q&&!q.length)DICE._q=null;
  Room.ev('dice',{vals});Snd.shake();focusBowl(true);
  const sh=$('#shake');sh.classList.remove('go');void sh.offsetWidth;sh.classList.add('go');
  DICE.forEach((d,k)=>{d.cube.style.transition='none';d.cube.querySelectorAll('.fc').forEach(f=>f.classList.remove('top'));
    d.x=(k?1:-1)*(24+Math.random()*20);d.y=BOWL.r-40;const sp=620+Math.random()*420,ang=-Math.PI/2+(Math.random()-.5)*1.4;
    d.vx=Math.cos(ang)*sp;d.vy=Math.sin(ang)*sp;d.z=70+Math.random()*30;d.vz=120;d.wx=(Math.random()*2-1)*1100;d.wy=(Math.random()*2-1)*1100;d.wz=(Math.random()*2-1)*500});
  let last=performance.now(),t0=last,done=false;const R=BOWL.r-20;
  function frame(now){const dt=Math.min(.033,(now-last)/1000);last=now;let moving=false;
    DICE.forEach(d=>{d.vz-=2200*dt;d.z+=d.vz*dt;
      if(d.z<=0){d.z=0;if(d.vz<-160)Snd.rattle(Math.min(1,-d.vz/900));d.vz=-d.vz*.42;if(d.vz<60)d.vz=0;const fr=Math.pow(.18,dt);d.vx*=fr;d.vy*=fr;d.wx*=fr;d.wy*=fr;d.wz*=fr}
      d.x+=d.vx*dt;d.y+=d.vy*dt;const dist=Math.hypot(d.x,d.y);
      if(dist>R){const nx=d.x/dist,ny=d.y/dist,vn=d.vx*nx+d.vy*ny;if(vn>0){d.vx-=1.7*vn*nx;d.vy-=1.7*vn*ny;d.wx*=-.8;if(vn>80)Snd.rattle(Math.min(1,vn/700))}d.x=nx*R;d.y=ny*R}
      d.ax+=d.wx*dt;d.ay+=d.wy*dt;d.az+=d.wz*dt;if(Math.hypot(d.vx,d.vy)>22||d.z>0||d.vz)moving=true});
    const [a,b]=DICE,dx=b.x-a.x,dy=b.y-a.y,dd=Math.hypot(dx,dy);
    if(dd<36&&dd>0){const nx=dx/dd,ny=dy/dd,rel=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;if(rel<0){a.vx+=rel*nx;a.vy+=rel*ny;b.vx-=rel*nx;b.vy-=rel*ny;Snd.rattle(.5)}const push=(36-dd)/2;a.x-=nx*push;a.y-=ny*push;b.x+=nx*push;b.y+=ny*push}
    DICE.forEach(drawDie);
    if((moving&&now-t0<2600)||now-t0<700)requestAnimationFrame(frame);else if(!done){done=true;settle()}}
  function settle(){DICE.forEach((d,k)=>{const [fx,fy]=FACE_UP[vals[k]];d.ax=Math.round(d.ax/360)*360+fx;d.ay=Math.round(d.ay/360)*360+fy;d.az=Math.round(d.az/90)*90+(Math.random()*16-8);
      d.cube.style.transition='transform 450ms cubic-bezier(.22,1,.36,1)';d.vx=d.vy=0;drawDie(d)});
    setTimeout(()=>{DICE.forEach((d,k)=>d.cube.querySelector(\`.fc[data-v="\${vals[k]}"]\`).classList.add('top'));
      const r=document.createElement('div');r.className='dres';r.textContent=\`\${fa(vals[0])} + \${fa(vals[1])} = \${fa(vals[0]+vals[1])}\`;$('#game').appendChild(r);setTimeout(()=>r.remove(),1900);
      setTimeout(()=>{focusBowl(false);res(vals)},750)},480)}
  requestAnimationFrame(frame)})}

/* ---------------- CAMERA ---------------- */
let fitS=1;const BK=B/720;
function fit(){const w=innerWidth,h=innerHeight;fitS=w<820?Math.min(w/(800*BK),(h-150)/(560*BK)):Math.min((w-80)/(960*BK),(h-60)/(640*BK));fitS=Math.max(.26,Math.min(1.2,fitS));applyCam()}
function applyCam(){if(!G)return;const s=fitS*G.zoom*G.focus;$('#cam').style.transform=\`scale3d(\${s},\${s},\${s})\`}
function focusBowl(on){if(!G)return;G.focus=on?1.55:1;applyCam()}
function rotate(dir){if(!G)return;G.cam+=dir*90;$('#board').style.setProperty('--cam',G.cam+'deg');Snd.whoosh()}
$('#rotL').onclick=()=>rotate(-1);$('#rotR').onclick=()=>rotate(1);
addEventListener('resize',fit);
const stage=$('#stage');
stage.addEventListener('wheel',e=>{if(!G)return;e.preventDefault();G.zoom=Math.max(.7,Math.min(2.2,G.zoom*(e.deltaY<0?1.08:.93)));applyCam()},{passive:false});
const ptrs=new Map();let pinch0=0,zoom0=1;
stage.addEventListener('pointerdown',e=>{ptrs.set(e.pointerId,e);if(ptrs.size===2){const[a,b]=[...ptrs.values()];pinch0=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);zoom0=G?G.zoom:1}});
stage.addEventListener('pointermove',e=>{if(!ptrs.has(e.pointerId))return;ptrs.set(e.pointerId,e);if(ptrs.size===2&&G){const[a,b]=[...ptrs.values()];const d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);G.zoom=Math.max(.7,Math.min(2.2,zoom0*d/pinch0));applyCam()}});
['pointerup','pointercancel','pointerleave'].forEach(t=>stage.addEventListener(t,e=>ptrs.delete(e.pointerId)));
stage.addEventListener('click',()=>{$('#tileInfo').hidden=true;$('#gMenu').hidden=true});

/* =====================================================================
   TURN FLOW (host / offline authoritative)
   ===================================================================== */
function log(x){const Lg=$('#log'),p=document.createElement('p');p.textContent=res(x);Lg.appendChild(p);while(Lg.children.length>5)Lg.firstChild.remove();Room.ev('log',both(x))}
function toastAll(x,ms){toast(res(x),ms);Room.ev('toast',{x:both(x),ms})}
function floatMoney(p,amt){Room.ev('float',{pid:p.id,amt});const el=document.querySelector(\`.pl[data-id="\${p.id}"]\`);if(!el)return;const f=document.createElement('span');f.className='float '+(amt>=0?'pos':'neg');f.textContent=(amt>=0?'+':'−')+short(Math.abs(amt));el.appendChild(f);setTimeout(()=>f.remove(),1300)}
function waitChoice(){return new Promise(r=>G.choice=r)}
function choose(v){if(Room.role==='guest'){hideDeed();Snd.press();Room.intent('choose',v);return}
  if(!G||!G.choice)return;const r=G.choice;G.choice=null;hideDeed();Snd.press();r(v)}
const isLocal=p=>!!p&&(Room.role==='guest'?p.id===Room.me:(!p.bot&&!p.remote));
function viewer(){if(!G)return null;if(Room.role==='guest')return G.players[Room.me]||null;const c=cur();if(isLocal(c))return c;return G.players.find(p=>isLocal(p)&&!p.out)||c}
const canManageFor=p=>!!G&&!G.busy&&!G.over&&cur()===p&&['roll','end','jail'].includes(G.phase);
const canManage=()=>!!G&&canManageFor(cur())&&isLocal(cur());
// UI → action. Guests send intents to the host; host/offline runs them.
function act(a,v){if(Room.role==='guest'){Snd.press();Room.intent(a,v);return}runAct(a,v,cur())}
function runAct(a,v,p){if(!G||!p)return;
  switch(a){
    case'roll':return doRoll();
    case'fine':return payFine();
    case'card':return useJailCard();
    case'choose':return choose(v);
    case'end':if(G.phase==='end'&&!G.busy){Snd.press();nextTurn()}return;
    case'house':if(canManageFor(p)&&G.props[v]&&G.props[v].owner===p.id)buildHouse(+v);return;
    case'factory':if(canManageFor(p)&&G.props[v]&&G.props[v].owner===p.id)buildFactory(+v);return;
    case'sell':if(canManageFor(p)&&G.props[v]&&G.props[v].owner===p.id)sellProp(+v);return}}

function startTurn(){if(!G||G.over)return;const p=cur();G.bought=false;G.landed=-1;G.offer=null;G.phase=p.jail>0?'jail':'roll';renderAll();
  if(p.bot)setTimeout(botStep,1000)}
function nextTurn(){if(!G||G.over)return;G.dbl=0;let k=0;do{G.turn=(G.turn+1)%G.players.length;k++}while(cur().out&&k<20);startTurn()}
async function doRoll(){if(!G||G.busy||G.over)return;const p=cur();if(!['roll','jail'].includes(G.phase))return;
  G.busy=true;G.phase='busy';renderAll();const [a,b]=await rollDice();if(!G)return;const dbl=a===b,sum=a+b;
  if(p.jail>0){
    if(dbl){p.jail=0;log(l=>L(l,\`\${p.name} جفت آورد و آزاد شد.\`,\`\${p.name} rolled doubles and walked free.\`));await moveSteps(p,sum);await land(p);return afterAction(false)}
    p.jail--;if(p.jail===0){log(l=>L(l,\`\${p.name} سه دور موند؛ جریمه رو داد و اومد بیرون.\`,\`\${p.name} served three turns, paid the fine and got out.\`));await pay(p,jailFine());if(!p.out){await moveSteps(p,sum);await land(p)}return afterAction(false)}
    log(l=>L(l,\`\${p.name} هنوز پشت میله‌هاست.\`,\`\${p.name} is still behind bars.\`));return afterAction(false)}
  if(dbl){G.dbl++;if(G.dbl>=3){log(l=>L(l,\`\${p.name} سه بار جفت آورد! مشکوکه، برو زندان.\`,\`\${p.name} rolled three doubles! Suspicious. Off to jail.\`));await sendToJail(p);return afterAction(false)}}
  await moveSteps(p,sum);await land(p);afterAction(dbl&&!p.jail&&!p.out)}
function afterAction(again){if(!G||G.over)return;G.busy=false;const p=cur();if(p.out)return setTimeout(nextTurn,700);
  G.phase=again?'roll':'end';if(again){if(isLocal(p))toast(tr('جفت آوردی! دوباره بنداز 🎲','Doubles! Roll again 🎲'));else Room.ev('toast',{x:{fa:'جفت آوردی! دوباره بنداز 🎲',en:'Doubles! Roll again 🎲'},to:p.id})}
  renderAll();if(p.bot)setTimeout(botStep,900)}
async function moveSteps(p,n){const dir=Math.sign(n);for(let k=0;k<Math.abs(n);k++){p.pos=(p.pos+dir+N)%N;
    if(dir>0&&p.pos===0){p.laps++;const a=startBonus();p.cash+=a;floatMoney(p,a);sfx('coin');log(l=>L(l,\`\${p.name} از شروع رد شد: +\${short(a,l)}\`,\`\${p.name} passed GO: +\${short(a,l)}\`));renderPlayers();await lapPayday(p)}
    hopTo(p);await sleep(270)}
  placeAll();const te=tileEls[p.pos];if(te){te.classList.remove('land');void te.offsetWidth;te.classList.add('land')}await sleep(250)}
window.MD={get G(){return G},TILES,get Room(){return Room},get myId(){return myId},set dice(q){DICE._q=q&&q.length?[...q]:null}};
async function lapPayday(p){if(!G||G.mode!=='ind'||p.out)return;const fs=owned(p.id).filter(i=>G.props[i].factory);if(!fs.length)return;
  let total=0;fs.forEach(i=>{total+=factoryYield(i);const b=bld[i]&&bld[i].factory;if(b){const f=b.querySelector('.factory');if(f){f.classList.remove('facpulse');void f.offsetWidth;f.classList.add('facpulse')}}});
  total=r10k(total);p.cash+=total;floatMoney(p,total);sfx('factory');setTimeout(()=>Snd.coin(),450);
  log(l=>L(l,\`🏭 درآمد صنعتی: کارخانه‌های \${p.name} بعد از یک دور کامل \${short(total,l)} تولید کردن.\`,\`🏭 Industrial payout: \${p.name}'s factories produced \${short(total,l)} this lap.\`));
  toastAll(l=>L(l,\`🏭 \${p.name}: +\${short(total,l)} درآمد کارخانه‌ها\`,\`🏭 \${p.name}: +\${short(total,l)} from factories\`));renderPlayers();await sleep(700)}
async function moveTo(p,target){const steps=(target-p.pos+N)%N;await moveSteps(p,steps);await land(p)}
async function sendToJail(p){p.pos=JAIL;p.jail=3;G.dbl=0;sfx('siren');hopTo(p);placeAll();renderPlayers();await sleep(500)}
async function pay(p,amt,to){p.cash-=amt;floatMoney(p,-amt);if(to){to.cash+=amt;floatMoney(to,amt)}sfx('coin');renderPlayers();if(p.cash<0)await resolveDebt(p)}
async function resolveDebt(p){const list=owned(p.id).sort((a,b)=>sellValue(a)-sellValue(b));
  while(p.cash<0&&list.length&&G){const i=list.shift(),v=sellValue(i);sellProp(i,true);log(l=>L(l,\`\${p.name} برای بدهی \${tn(i,l)} رو فروخت (\${short(v,l)}).\`,\`\${p.name} sold \${tn(i,l)} to cover debt (\${short(v,l)}).\`));await sleep(300)}
  if(p.cash<0)bankrupt(p);renderAll()}
function bankrupt(p){p.out=true;owned(p.id).forEach(i=>{G.props[i]={owner:-1,houses:0,factory:false};renderBuildings(i)});
  log(l=>L(l,\`💀 \${p.name} ورشکست شد.\`,\`💀 \${p.name} went bankrupt.\`));toastAll(l=>L(l,\`\${p.name} ورشکست شد!\`,\`\${p.name} is bankrupt!\`));placeAll();refreshTiles();
  const alive=G.players.filter(x=>!x.out);if(alive.length===1)gameOver(alive[0])}
const autoMs=(p,bot,human)=>p.bot?bot:human;
async function land(p){if(!G||p.out)return;const i=p.pos,t=TILES[i];
  if(t.t==='prop'){const pr=G.props[i];G.landed=i;
    if(pr.owner===-1){const cost=price(i);
      if(G.bought){await deed(i,{note:{fa:'🔒 این نوبت یه بار خرید کردی. دفعه‌ی بعد!',en:'🔒 You already made your purchase this turn. Next time!'},auto:autoMs(p,1000,2100)});return}
      if(p.cash<cost){log(l=>L(l,\`\${p.name} پولش به \${tn(i,l)} نمی‌رسه.\`,\`\${p.name} can't afford \${tn(i,l)}.\`));await deed(i,{note:l=>L(l,\`💰 پول کافی نداری (\${money(cost,l)})\`,\`💰 Not enough cash (\${money(cost,l)})\`),auto:autoMs(p,1100,2100)});return}
      let yes;
      if(p.bot){deed(i,{note:{fa:'🤖 رقیب داره فکر می‌کنه…',en:'🤖 Your rival is thinking…'}});await sleep(600);yes=botWantsBuy(p,i);hideDeed()}
      else{G.phase='buy';G.offer={kind:'land',i,cost};renderAll();
        deed(i,{buttons:[{label:{fa:'بخر',en:'Buy'},cls:'act good',sub:both(l=>money(cost,l)),v:true},{label:{fa:'نه، رد کن',en:'Pass'},cls:'act alt',v:false}]});
        yes=await waitChoice();if(!G)return;G.offer=null}
      if(yes&&!G.bought&&p.cash>=cost&&pr.owner===-1){p.cash-=cost;pr.owner=p.id;G.bought=true;floatMoney(p,-cost);sfx('buy');
        log(l=>L(l,\`\${p.name} \${tn(i,l)} رو خرید (\${short(cost,l)}).\`,\`\${p.name} bought \${tn(i,l)} (\${short(cost,l)}).\`));refreshTiles();renderAll()}
      G.phase='busy';return}
    if(pr.owner!==p.id&&!G.players[pr.owner].out){const r=rent(i),o=G.players[pr.owner];
      await deed(i,{stamp:l=>L(l,\`💸 اجاره به \${o.name}: \${money(r,l)}\`,\`💸 Rent to \${o.name}: \${money(r,l)}\`),auto:autoMs(p,1500,2400)});if(!G||p.out||o.out)return;
      log(l=>L(l,\`\${p.name} اجاره‌ی \${tn(i,l)} رو به \${o.name} داد: \${short(r,l)}\`,\`\${p.name} paid \${o.name} \${short(r,l)} rent for \${tn(i,l)}\`));await pay(p,r,o);return}
    if(pr.owner===p.id){const kind=upgradeKind(i);
      if(!kind){await deed(i,{note:{fa:'👑 این ملک دیگه کامل ساخته شده.',en:'👑 This lot is fully built.'},auto:autoMs(p,900,1700)});return}
      if(G.bought){await deed(i,{note:{fa:'👑 ملک خودته، ولی این نوبت خریدت رو کردی. دفعه‌ی بعد که اینجا فرود بیای می‌تونی بسازی.',en:'👑 Yours, but you already bought this turn. Land here again to build.'},auto:autoMs(p,900,2200)});return}
      const cost=kind==='house'?houseCost(i):factoryCost(i);
      if(p.cash<cost){await deed(i,{note:l=>L(l,\`👑 ملک خودته. برای ساخت \${money(cost,l)} لازم داری.\`,\`👑 Yours. Building needs \${money(cost,l)}.\`),auto:autoMs(p,900,2000)});return}
      if(p.bot){deed(i,{note:{fa:'👑 ربات داره نقشه‌ی ساخت می‌کشه…',en:'👑 The bot is drawing up plans…'}});await sleep(700);if(!G)return;botUpgrade(p,i,kind);hideDeed();return}
      G.phase='buy';G.offer={kind,i,cost};renderAll();
      deed(i,{buttons:[{label:kind==='house'?{fa:'🏠 خونه بساز',en:'🏠 Build a house'}:{fa:'🏭 کارخانه بزن',en:'🏭 Build a factory'},sub:both(l=>money(cost,l)),cls:'act good',v:true},{label:{fa:'فعلاً نه',en:'Not now'},cls:'act alt',v:false}],
        note:{fa:'فقط یک خرید در هر نوبت. اگه الان نسازی، باید دوباره روی همین خونه فرود بیای.',en:'One purchase per turn. Skip it and you\\u2019ll have to land here again.'}});
      const yes=await waitChoice();if(!G)return;G.offer=null;
      if(yes){kind==='house'?buildHouse(i):buildFactory(i)}
      G.phase='busy';return}
    return}
  if(t.t==='tax'){const a=t.kind==='income'?r10k(Math.max(300000*G.infl,p.cash*.1)):r10k(CONFIG.fixedTax*G.infl);
    await deed(i,{stamp:l=>\`💸 \${money(a,l)}\`,auto:autoMs(p,1300,2200)});if(!G||p.out)return;
    log(l=>\`\${p.name}: \${tn(i,l)} \${short(a,l)}\`);await pay(p,a);return}
  if(t.t==='chance'||t.t==='chest'){const deck=t.t==='chance'?CHANCE:CHEST,card=deck[rnd(deck.length)];await showCard(t.t,card,p);if(!G)return;await card.f(p);return}
  if(t.t==='gojail'){await deed(i,{stamp:{fa:'🚔 دستگیر شدی! مستقیم برو زندان',en:'🚔 Busted! Go straight to jail'},auto:autoMs(p,1300,2200)});if(!G||p.out)return;log(l=>L(l,\`\${p.name} رفت زندان.\`,\`\${p.name} went to jail.\`));await sendToJail(p);return}
  if(t.t==='start'){await deed(i,{note:l=>L(l,\`💵 هر عبور از شروع +\${money(startBonus(),l)}\`,\`💵 Every pass of GO: +\${money(startBonus(),l)}\`),auto:autoMs(p,800,1500)});return}
  if(t.t==='parking'){await deed(i,{note:{fa:'☕ یه نفس راحت. اینجا خبری نیست.',en:'☕ Take a breath. Nothing happens here.'},auto:autoMs(p,800,1500)});return}
  if(t.t==='jail'){await deed(i,{note:{fa:'👀 فقط ملاقاتی؛ نگران نباش.',en:'👀 Just visiting. Relax.'},auto:autoMs(p,800,1500)})}}

/* chance / chest card */
function cardView(type,txt,{button,note,auto},done){const ov=$('#cardOv');Snd.card();
  ov.innerHTML=\`<div class="card" style="--cc:\${type==='chance'?'oklch(68% 0.16 55)':'oklch(56% 0.12 240)'}"><header>\${type==='chance'?tr('شانس','Chance'):tr('صندوق اجتماعی','Community Chest')}<span>\${type==='chance'?'🎰':'📦'}</span></header><p></p>\${note?\`<div class="dnote">\${esc(res(note))}</div>\`:''}\${button?\`<footer><button class="act" type="button">\${tr('باشه','OK')}</button></footer>\`:''}</div>\`;
  ov.querySelector('p').textContent=res(txt);ov.hidden=false;if(button)ov.querySelector('button').onclick=done;if(auto)setTimeout(done,auto)}
function showCard(type,card,p){return new Promise(res_=>{let fin=false;
  const done=()=>{if(fin)return;fin=true;$('#cardOv').hidden=true;if(G)G.cardDone=null;Room.ev('hideCard',{});res_()};
  G.cardDone=done;Room.ev('card',{type,txt:card.txt,pid:p.id});
  if(p.bot)cardView(type,card.txt,{auto:2400},done);
  else if(p.remote)cardView(type,card.txt,{note:{fa:\`منتظر \${p.name}…\`,en:\`Waiting for \${p.name}…\`},auto:12000},done);
  else cardView(type,card.txt,{button:true},done)})}

/* ---------------- DEED CARD (landing info) ---------------- */
let deedRes=null;
function hideDeed(){const ov=$('#deedOv');const was=!ov.hidden;ov.hidden=true;if(was)Room.ev('hideDeed',{});if(deedRes){const r=deedRes;deedRes=null;r()}}
function deed(i,opts={}){return new Promise(r=>{if(!G)return r();hideDeed();const t=TILES[i],ov=$('#deedOv');deedRes=r;
  let buttons=opts.buttons,note=opts.note,auto=opts.auto;
  if(Room.role==='host')Room.ev('deed',{i,pid:G.turn,auto:auto||0,stamp:both(opts.stamp),note:both(note),buttons:buttons?buttons.map(b=>({label:both(b.label),sub:both(b.sub),cls:b.cls,v:b.v})):null});
  if(buttons&&Room.role!=='guest'&&!isLocal(cur())){buttons=null;note={fa:\`منتظر تصمیم \${cur().name}…\`,en:\`Waiting for \${cur().name} to decide…\`}}
  const g=t.g?GROUPS[t.g]:null,cc=g?g.c:'var(--ink)',tc=g&&g.dark?'--tc:var(--ink);':'';
  let body='';
  if(t.t==='prop'){const pr=G.props[i],base=t.price*CONFIG.rentBase*G.infl,curIdx=pr.factory?5:pr.houses,n=k=>fa(k);
    const rows=[[tr('زمین خالی','Empty lot'),base],...[1,2,3,4].map(k=>[tr(\`\${n(k)} خانه\`,\`\${n(k)} house\${k>1?'s':''}\`),base*CONFIG.rentMult[k]])];
    if(G.mode==='ind')rows.push([tr('کارخانه','Factory'),base*CONFIG.factoryMult]);
    body=\`<div class="drows"><div><span>\${tr('قیمت خرید','Price')}</span><b>\${money(price(i))}</b></div>\${rows.map((rw,k)=>\`<div class="\${pr.owner>=0&&k===curIdx?'cur':''}"><span>\${tr('اجاره · ','Rent · ')}\${rw[0]}</span><span>\${money(r10k(rw[1]))}</span></div>\`).join('')}<div><span>\${tr('هزینه هر خانه','Cost per house')}</span><span>\${money(houseCost(i))}</span></div>\${G.mode==='ind'?\`<div><span>\${tr('هزینه کارخانه','Factory cost')}</span><span>\${money(factoryCost(i))}</span></div><div><span>\${tr('⚙️ درآمد کارخانه هر دور','⚙️ Factory income per lap')}</span><span>\${money(factoryYield(i))}</span></div>\`:''}<div><span>\${tr('مالک','Owner')}</span><span>\${pr.owner>=0?esc(G.players[pr.owner].name):tr('بدون مالک','Unowned')}</span></div></div>\`}
  else{const desc={start:tr(\`هر بار از اینجا رد بشی \${money(startBonus())} جایزه می‌گیری.\`,\`Collect \${money(startBonus())} every time you pass.\`),jail:tr(\`برای آزادی جفت بیار یا \${money(jailFine())} جریمه بده.\`,\`Roll doubles or pay \${money(jailFine())} to get out.\`),parking:tr('یه نفس راحت. اینجا خبری نیست.','Take a breath. Nothing happens here.'),gojail:tr('مستقیم برو زندان، از شروع هم رد نشو.','Go directly to jail. Do not pass GO.'),tax:t.kind==='income'?tr('۱۰٪ پول نقدت (حداقل ۳۰۰ هزار با تورم).','10% of your cash (min 300K, inflation-adjusted).'):tr(\`\${money(r10k(CONFIG.fixedTax*G.infl))} عوارض شهرداری.\`,\`\${money(r10k(CONFIG.fixedTax*G.infl))} city levy.\`)}[t.t]||'';
    body=\`<div class="drows"><p class="ddesc">\${desc}</p></div>\`}
  const stamp=res(opts.stamp),nt=res(note);
  ov.innerHTML=\`<div class="card deed" style="--cc:\${cc};\${tc}"><header><span>\${t.t==='prop'?t.ic:t.icon} \${tn(i)}</span>\${g?\`<small>\${tr('دسته ','')}\${res(g)}\${tr('',' district')}</small>\`:''}</header>\${body}\${stamp?\`<div class="dstamp">\${esc(stamp)}</div>\`:''}\${buttons?\`<footer>\${buttons.map((b,k)=>\`<button type="button" class="\${b.cls}" data-dk="\${k}">\${esc(res(b.label))}\${b.sub?\`<small>\${esc(res(b.sub))}</small>\`:''}</button>\`).join('')}</footer>\`:''}\${nt?\`<div class="dnote">\${esc(nt)}</div>\`:''}</div>\`;
  ov.hidden=false;const card=ov.querySelector('.card');
  (buttons||[]).forEach((b,k)=>{card.querySelector(\`[data-dk="\${k}"]\`).onclick=()=>choose(b.v)});
  if(!buttons){card.style.cursor='pointer';card.onclick=()=>{if(Room.role!=='guest'||!opts.sticky)hideDeedLocal()}}
  if(auto)setTimeout(()=>{if(deedRes===r)hideDeed()},auto)})}
function hideDeedLocal(){if(Room.role==='guest'){$('#deedOv').hidden=true;return}hideDeed()}

/* property actions: each is one purchase and only on the tile you landed on */
function buildHouse(i){if(!canUpgradeNow(i))return false;const pr=G.props[i],p=G.players[pr.owner],c=houseCost(i);if(p.cash<c||pr.houses>=4||pr.factory)return false;
  p.cash-=c;pr.houses++;G.bought=true;floatMoney(p,-c);renderBuildings(i,'house');setTimeout(()=>sfx('hammer'),430);
  log(l=>L(l,\`\${p.name} توی \${tn(i,l)} خونه ساخت.\`,\`\${p.name} built a house in \${tn(i,l)}.\`));renderAll();return true}
function buildFactory(i){if(!canUpgradeNow(i)||G.mode!=='ind')return false;const pr=G.props[i],p=G.players[pr.owner],c=factoryCost(i);if(p.cash<c||pr.houses<4||pr.factory)return false;
  p.cash-=c;pr.houses=0;pr.factory=true;G.bought=true;floatMoney(p,-c);renderBuildings(i,'factory');setTimeout(()=>sfx('factory'),1080);
  log(l=>L(l,\`🏭 \${p.name} توی \${tn(i,l)} کارخونه زد!\`,\`🏭 \${p.name} opened a factory in \${tn(i,l)}!\`));renderAll();return true}
function sellProp(i,silent){if(!G)return;const pr=G.props[i],p=G.players[pr.owner],v=sellValue(i);p.cash+=v;floatMoney(p,v);
  G.props[i]={owner:-1,houses:0,factory:false};renderBuildings(i);sfx('coin');if(!silent)log(l=>L(l,\`\${p.name} \${tn(i,l)} رو فروخت (\${short(v,l)}).\`,\`\${p.name} sold \${tn(i,l)} (\${short(v,l)}).\`));refreshTiles();if(!silent)renderAll()}

/* ---------------- BOTS ---------------- */
function botWantsBuy(p,i){return p.cash-price(i)>2.5e6*G.infl||(p.cash-price(i)>8e5*G.infl&&Math.random()<.6)}
function botUpgrade(p,i,kind){if(kind==='factory'&&p.cash-factoryCost(i)>4e6*G.infl)buildFactory(i);else if(kind==='house'&&p.cash-houseCost(i)>3e6*G.infl)buildHouse(i)}
async function botStep(){if(!G||G.over||G.busy)return;const p=cur();if(!p.bot)return;
  if(G.phase==='jail'){if(p.jailFree){useJailCard()}else if(p.cash>jailFine()*4){await payFine()}if(!G)return;setTimeout(doRoll,500);return}
  if(G.phase==='roll'){doRoll();return}
  if(G.phase==='end'){nextTurn()}}
async function payFine(){const p=cur();if(p.jail<=0||G.phase!=='jail')return;await pay(p,jailFine());if(!G)return;p.jail=0;if(p.out){renderAll();return setTimeout(nextTurn,700)}G.phase='roll';log(l=>L(l,\`\${p.name} جریمه داد و آزاد شد.\`,\`\${p.name} paid the fine and is free.\`));renderAll()}
function useJailCard(){const p=cur();if(!p.jailFree||G.phase!=='jail')return;p.jailFree--;p.jail=0;G.phase='roll';log(l=>L(l,\`\${p.name} با پارتی آزاد شد.\`,\`\${p.name} used connections to get out.\`));renderAll()}

/* ---------------- GUEST: replay host events ---------------- */
function guestEv(e,d){const pl=k=>G.players[k];
  switch(e){
    case'dice':rollDice(d.vals);break;
    case'hop':{const p=pl(d.pid);if(p){p.pos=d.pos;hopTo(p)}break}
    case'deed':{const o={stamp:d.stamp,note:d.note,auto:d.auto};
      if(d.buttons){if(d.pid===Room.me)o.buttons=d.buttons;else{const p=pl(d.pid);o.note={fa:\`منتظر تصمیم \${p?p.name:''}…\`,en:\`Waiting for \${p?p.name:''} to decide…\`};o.auto=0}}
      deed(d.i,o);break}
    case'hideDeed':hideDeed();break;
    case'card':{const mine=d.pid===Room.me,p=pl(d.pid);cardView(d.type,d.txt,mine?{button:true}:{note:{fa:\`\${p?p.name:''} کارت کشید\`,en:\`\${p?p.name:''} drew a card\`},auto:2800},()=>{$('#cardOv').hidden=true;if(mine)Room.intent('cardok')});break}
    case'hideCard':$('#cardOv').hidden=true;break;
    case'log':log(d);break;
    case'toast':if(d.to===undefined||d.to===Room.me)toast(res(d.x),d.ms);break;
    case'float':{const p=pl(d.pid);if(p)floatMoney(p,d.amt);break}
    case'bld':G.props[d.i]=d.prop;renderBuildings(d.i,d.anim);break;
    case'sfx':if(Snd[d.n])Snd[d.n]();break;
    case'year':G.year=d.year;G.infl=d.infl;newYearFx();break;
    case'time':Object.assign(G,d);break;
    case'over':{const w=pl(d.pid);if(w)gameOver(w);break}}}

/* ---------------- RENDER ---------------- */
function renderAll(){if(!G)return;renderPlayers();renderDock();renderProps();placeAll();refreshTiles();Room.sync()}
function renderPlayers(){if(!G)return;const el=$('#players'),me=viewer();
  if(el.children.length!==G.players.length){el.innerHTML='';G.players.forEach(p=>{const d=document.createElement('div');d.dataset.id=p.id;d.innerHTML=\`<div class="mini">\${stoneHTML(p)}</div><div class="pl-name"></div><div class="pl-cash"></div>\`;el.appendChild(d)})}
  G.players.forEach((p,k)=>{const d=el.children[k];d.className='pl'+(p.id===G.turn?' turn':'')+(p.out?' out':'');
    d.querySelector('.pl-name').innerHTML=\`\${esc(p.name)}\${p.bot?\`<em>\${tr('ربات','bot')}</em>\`:''}\${p.remote?'<em title="online">🌐</em>':''}\${Room.role!=='off'&&me&&p.id===me.id?\`<em>\${tr('تو','you')}</em>\`:''}\${p.jail?'<em>🔒</em>':''}\${p.jailFree?'<em>🎫</em>':''}\`;
    d.querySelector('.pl-cash').textContent=money(p.cash)});Room.sync()}
function renderDock(){if(!G)return;const p=cur(),d=$('#dock');
  const who=\`<div class="who"><div class="mini">\${stoneHTML(p)}</div><div><b>\${tr('نوبت '+esc(p.name),esc(p.name)+'\\u2019s turn')}</b><small>\${tn(p.pos)}</small></div></div>\`;
  if(G.over){d.innerHTML=who;return}
  if(!isLocal(p)){d.innerHTML=who+\`<span class="thinking">\${p.bot?(G.phase==='busy'?tr('در حال بازی','Playing'):tr('داره فکر می‌کنه','Thinking')):tr('منتظر '+esc(p.name),'Waiting for '+esc(p.name))}</span>\`;return}
  let h='';
  if(G.phase==='roll')h=\`<button class="roll idle" id="dRoll" type="button">\${tr('بنداز','Roll')}<br>🎲</button>\`;
  else if(G.phase==='jail')h=\`<button class="roll" id="dRoll" type="button">\${tr('جفت؟','Doubles?')}<br>🎲</button><button class="act alt" id="dFine" type="button">\${tr('جریمه','Pay fine')}<small>\${short(jailFine())}</small></button>\${p.jailFree?\`<button class="act good" id="dCard" type="button">\${tr('کارت آزادی','Use card')}</button>\`:''}\`;
  else if(G.phase==='buy'&&G.offer){const o=G.offer,lab=o.kind==='land'?tr('بخر','Buy'):o.kind==='house'?tr('🏠 بساز','🏠 Build'):tr('🏭 کارخانه','🏭 Factory');
    h=\`<button class="act good" id="dBuy" type="button">\${lab}<small>\${money(o.cost)}</small></button><button class="act alt" id="dSkip" type="button">\${o.kind==='land'?tr('نه، رد کن','Pass'):tr('فعلاً نه','Not now')}</button>\`}
  else if(G.phase==='end'){const i=G.landed,k=i>=0?upgradeKind(i):null;
    if(G.bought)h+=\`<span class="quota-chip used">✓ \${tr('خرید این نوبت انجام شد','Purchase made this turn')}</span>\`;
    else if(k&&canUpgradeNow(i)){const c=k==='house'?houseCost(i):factoryCost(i);h+=\`<button class="act good" id="dUp" type="button" \${p.cash<c?'disabled':''}>\${k==='house'?tr('🏠 خونه در ','🏠 House on '):tr('🏭 کارخانه در ','🏭 Factory on ')}\${tn(i)}<small>\${money(c)}</small></button>\`}
    h+=\`<button class="act" id="dEnd" type="button">\${tr('پایان نوبت','End turn')}</button>\`}
  else h=\`<span class="thinking">\${tr('صبر کن','Hold on')}</span>\`;
  d.innerHTML=who+h;
  const on=(id,f)=>{const b=d.querySelector(id);if(b)b.onclick=f};
  on('#dRoll',()=>act('roll'));on('#dFine',()=>act('fine'));on('#dCard',()=>act('card'));on('#dBuy',()=>choose(true));on('#dSkip',()=>choose(false));on('#dEnd',()=>act('end'));
  on('#dUp',()=>act(upgradeKind(G.landed),G.landed))}
function renderProps(){if(!G)return;const p=viewer()||cur(),list=owned(p.id),el=$('#plist'),mine=p===cur(),ok=canManage()&&mine;
  $('#propsWho').textContent=p.name;
  const q=$('#quota');q.className='quota'+(mine&&G.bought?' used':'');
  q.textContent=!mine?tr('نوبت تو نیست','Not your turn'):G.bought?tr('✓ خرید این نوبت انجام شد. نوبت بعد دوباره.','✓ Purchase used this turn. Next turn you get another.'):tr('۱ خرید در این نوبت: زمین، خانه یا کارخانه؛ فقط روی خونه‌ای که روش فرود اومدی.','1 purchase this turn: land, house or factory, only on the tile you landed on.');
  if(!list.length){el.innerHTML=\`<p class="empty">\${tr(\`\${esc(p.name)} هنوز هیچ ملکی نداره. روی یه خونه‌ی خالی فرود بیا و بخرش؛ هر بار که دوباره روش فرود بیای، می‌تونی یه طبقه بسازی.\`,\`\${esc(p.name)} owns nothing yet. Land on an empty lot to buy it; every time you land there again you can build one more level.\`)}</p>\`;return}
  el.innerHTML='';list.forEach(i=>{const t=TILES[i],pr=G.props[i],row=document.createElement('div');row.className='prop'+(G.landed===i&&mine?' here':'');
    const pips=pr.factory?'<span class="on fac"></span>':[0,1,2,3].map(k=>\`<span class="\${k<pr.houses?'on':''}"></span>\`).join('');
    const here=ok&&canUpgradeNow(i),lock=\`🔒<br>\${tr('فرود بیا','Land here')}\`;
    const hOk=here&&!pr.factory&&pr.houses<4&&p.cash>=houseCost(i),fOk=here&&pr.houses>=4&&!pr.factory&&p.cash>=factoryCost(i);
    row.innerHTML=\`<div class="prop-h"><i style="--gc:\${GROUPS[t.g].c}"></i><b>\${tn(i)}</b><small>\${tr('اجاره ','rent ')}\${short(rent(i))}</small></div><div class="pips">\${pips}</div>\${pr.factory&&G.mode==='ind'?\`<div class="fyield">\${tr('⚙️ درآمد هر دور: ','⚙️ Per lap: ')}\${money(factoryYield(i))}</div>\`:''}
      <div class="acts"><button type="button" class="b-house" \${hOk?'':'disabled'}>\${!pr.factory&&pr.houses<4&&!here&&!G.bought?lock:\`🏠 \${tr('خانه','House')}<br>\${short(houseCost(i))}\`}</button>
      \${G.mode==='ind'?\`<button type="button" class="b-fac" \${fOk?'':'disabled'}>🏭 \${tr('کارخانه','Factory')}<br>\${short(factoryCost(i))}</button>\`:''}
      <button type="button" class="b-sell" \${!ok?'disabled':''}>\${tr('فروش','Sell')}<br>\${short(sellValue(i))}</button></div>\`;
    const bh=row.querySelector('.b-house'),bf=row.querySelector('.b-fac'),bs=row.querySelector('.b-sell');
    bh.onclick=()=>act('house',i);if(bf)bf.onclick=()=>act('factory',i);
    bs.onclick=()=>{if(bs.dataset.arm){act('sell',i)}else{bs.dataset.arm=1;bs.innerHTML=tr('مطمئنی؟<br>دوباره بزن','Sure?<br>Tap again');bs.classList.add('arm')}};el.appendChild(row)})}
function showTileInfo(i){if(!G)return;const t=TILES[i],el=$('#tileInfo');Snd.press();
  if(t.t!=='prop'){const desc={start:tr(\`هر بار رد بشی \${money(startBonus())} می‌گیری.\`,\`Collect \${money(startBonus())} each pass.\`),jail:tr(\`برای آزادی جفت بیار یا \${money(jailFine())} جریمه بده.\`,\`Roll doubles or pay \${money(jailFine())}.\`),parking:tr('یه نفس راحت. اینجا خبری نیست.','Nothing happens here.'),gojail:tr('مستقیم برو زندان، از شروع هم رد نشو.','Go directly to jail.'),chance:tr('یه کارت شانس بکش.','Draw a Chance card.'),chest:tr('یه کارت صندوق اجتماعی بکش.','Draw a Community Chest card.'),tax:t.kind==='income'?tr('۱۰٪ پول نقدت (حداقل ۳۰۰ هزار با تورم).','10% of your cash (min 300K).'):tr(\`\${money(r10k(CONFIG.fixedTax*G.infl))} عوارض.\`,\`\${money(r10k(CONFIG.fixedTax*G.infl))} levy.\`)}[t.t];
    el.innerHTML=\`<div class="ti-band" style="--gc:var(--ink)"><b>\${t.icon} \${tn(i)}</b></div><div class="ti-body"><p>\${desc}</p></div><button class="ti-close" type="button" aria-label="\${tr('بستن','Close')}">✕</button>\`}
  else{const pr=G.props[i],g=GROUPS[t.g],base=t.price*CONFIG.rentBase*G.infl,n=k=>fa(k);
    const rows=[[tr('زمین خالی','Empty lot'),base],...[1,2,3,4].map(k=>[tr(\`\${n(k)} خانه\`,\`\${n(k)} house\${k>1?'s':''}\`),base*CONFIG.rentMult[k]])];
    if(G.mode==='ind')rows.push([tr('کارخانه','Factory'),base*CONFIG.factoryMult]);
    const curIdx=pr.factory?5:pr.houses;
    el.innerHTML=\`<div class="ti-band" style="--gc:\${g.c};\${g.dark?'--tc:var(--ink)':''}"><b>\${t.ic} \${tn(i)}</b><small>\${tr('دسته ','')}\${res(g)}\${tr('',' district')} · \${pr.owner>=0?tr('مالک: ','Owner: ')+esc(G.players[pr.owner].name):tr('بدون مالک','Unowned')}</small></div>
      <div class="ti-body"><div><span>\${tr('قیمت','Price')}</span><b>\${money(price(i))}</b></div>\${rows.map((r,k)=>\`<div class="\${pr.owner>=0&&k===curIdx?'cur':''}"><span>\${r[0]}</span><span>\${money(r10k(r[1]))}</span></div>\`).join('')}
      <div><span>\${tr('هزینه هر خانه','Cost per house')}</span><span>\${money(houseCost(i))}</span></div><div><span>\${tr('هر ۴ خیابون دسته دستت باشه','Own all 4 streets')}</span><span>\${tr('اجاره زمین ×۲','Lot rent ×2')}</span></div>\${G.mode==='ind'?\`<div><span>\${tr('⚙️ درآمد کارخانه هر دور','⚙️ Factory income per lap')}</span><span>\${money(factoryYield(i))}</span></div>\`:''}</div><button class="ti-close" type="button" aria-label="\${tr('بستن','Close')}">✕</button>\`}
  el.hidden=false;el.querySelector('.ti-close').onclick=()=>el.hidden=true}
function gameOver(w){G.over=true;Snd.fanfare();Room.ev('over',{pid:w.id});const ov=$('#winOv');
  ov.innerHTML=\`<div class="card" style="--cc:var(--gold)"><header>\${tr(esc(w.name)+' برد!',esc(w.name)+' wins!')}<span>👑</span></header><p>\${tr(\`از \${tn(1)} تا \${tn(N-1)}، همه‌ی شهر مال \${esc(w.name)} شد. دارایی کل: \${money(netWorth(w))} در سال \${yr(G.year)}.\`,\`From \${tn(1)} to \${tn(N-1)}, the whole city belongs to \${esc(w.name)}. Net worth: \${money(netWorth(w))} in \${yr(G.year)}.\`)}</p><footer class="row">\${Room.role==='guest'?'':\`<button class="act" id="wAgain" type="button">\${tr('دوباره','Play again')}</button>\`}<button class="act alt" id="wMenu" type="button">\${tr('منوی اصلی','Main menu')}</button></footer></div>\`;
  ov.hidden=false;const again=$('#wAgain');if(again)again.onclick=()=>{ov.hidden=true;if(Room.role==='host'){const m=G.mode;Room.started=false;startGame(m)}else startGame(G?G.mode:'classic')};
  $('#wMenu').onclick=()=>{ov.hidden=true;backToMenu()};renderDock()}

/* ---------------- TIME & INFLATION ---------------- */
let lastTs=0,hudAcc=0,netAcc=0;
function tick(ts){requestAnimationFrame(tick);const dt=Math.min(.25,(ts-lastTs)/1000||0);lastTs=ts;if(!G||G.over||document.hidden)return;
  const c=G.cfg,yl=c.yearMin*60;
  if(Room.role==='guest'){G.yearT=Math.min(G.yearT+dt,yl-.01);if(G.tradeOpen)G.tradeLeft=Math.max(0,G.tradeLeft-dt);else G.tradeT=Math.min(G.tradeT+dt,c.tradeMin*60)}
  else{G.yearT+=dt;if(G.yearT>=yl){G.yearT-=yl;newYear()}
    if(!$('#tradeDlg').open){if(G.tradeOpen){G.tradeLeft-=dt;if(G.tradeLeft<=0)closeTradeWindow()}else{G.tradeT+=dt;if(G.tradeT>=c.tradeMin*60){G.tradeT=0;openTradeWindow()}}}
    netAcc+=dt;if(netAcc>2){netAcc=0;Room.ev('time',{yearT:G.yearT,tradeT:G.tradeT,tradeOpen:G.tradeOpen,tradeLeft:G.tradeLeft})}}
  hudAcc+=dt;if(hudAcc>.25){hudAcc=0;renderTime()}}
requestAnimationFrame(tick);
function renderTime(){if(!G)return;const c=G.cfg,yl=c.yearMin*60,f=Math.min(1,G.yearT/yl),left=Math.max(0,yl-G.yearT),pad=v=>fa(v).padStart(2,tr('۰','0'));
  $('#sandTop').setAttribute('y',4+18*f);$('#sandTop').setAttribute('height',18*(1-f));$('#sandBot').setAttribute('y',40-18*f);$('#sandBot').setAttribute('height',18*f);
  $('#yLabel').textContent=tr(\`تورم بعدی: \${fa(c.inflation)}٪\`,\`Next inflation: \${fa(c.inflation)}%\`);$('#yLeft').textContent=pad(Math.floor(left/60))+':'+pad(Math.floor(left%60));
  const bt=$('#bTrade');bt.disabled=!G.tradeOpen;bt.classList.toggle('on',!!G.tradeOpen);
  if(G.tradeOpen){$('#tradeTxt').textContent=tr('معامله · ','Trade · ')+fa(Math.ceil(G.tradeLeft))}else{const tl=Math.max(0,c.tradeMin*60-G.tradeT);$('#tradeTxt').textContent=tr('معامله تا ','Trade in ')+fa(Math.floor(tl/60))+':'+pad(Math.floor(tl%60))}}
function newYear(){G.year++;G.infl*=1+G.cfg.inflation/100;newYearFx();Room.ev('year',{year:G.year,infl:G.infl});
  toastAll(l=>L(l,\`سال \${yr(G.year,l)} شد! قیمت‌ها \${fa(G.cfg.inflation,l)}٪ رفت بالا 📈\`,\`It\\u2019s \${yr(G.year,l)}! Prices up \${fa(G.cfg.inflation,l)}% 📈\`),3500);
  log(l=>L(l,\`📅 سال \${yr(G.year,l)}: تورم \${fa(G.cfg.inflation,l)}٪ روی همه‌ی قیمت‌ها و اجاره‌ها.\`,\`📅 \${yr(G.year,l)}: \${fa(G.cfg.inflation,l)}% inflation on all prices and rents.\`));Room.sync()}
function newYearFx(){const cal=$('#cal'),old=$('#calPage'),nw=old.cloneNode();nw.removeAttribute('id');
  old.textContent=yr(G.year);cal.appendChild(nw);nw.textContent=yr(G.year-1);nw.classList.add('flip');setTimeout(()=>nw.remove(),950);
  Snd.bell();refreshTiles();renderProps();if(!$('#tileInfo').hidden)$('#tileInfo').hidden=true;renderDock()}

/* ---------------- TRADE (local seats + bots; online guests excluded in v2) ---------------- */
let T=null;
function openTradeWindow(){G.tradeOpen=true;G.tradeLeft=CONFIG.tradeWindow;sfx('bell');toastAll({fa:'💼 پنجره‌ی معامله باز شد! ۴۵ ثانیه وقت داری.',en:'💼 Trade window open! You have 45 seconds.'});renderTime();Room.sync()}
function closeTradeWindow(){G.tradeOpen=false;G.tradeT=0;renderTime();Room.sync()}
$('#bTrade').onclick=()=>{if(!G||!G.tradeOpen)return;
  if(Room.role==='guest')return toast(tr('معامله در بازی آنلاین فعلاً فقط برای میزبانه','Online trading is host-only in v2'),3200);
  if(G.busy)return toast(tr('الان وسط حرکتیم، یه لحظه صبر کن','Mid-move, hang on a sec'));
  const humans=G.players.filter(p=>isLocal(p)&&!p.out);if(!humans.length)return;const a=isLocal(cur())?cur():humans[0];
  T={a:a.id,b:null,give:new Set(),take:new Set(),cg:0,ct:0,step:'pick'};Snd.whoosh();renderTrade();$('#tradeDlg').showModal()};
function chipHTML(i){const t=TILES[i];return\`<span class="chip" draggable="true" data-i="\${i}"><i style="--gc:\${GROUPS[t.g].c}"></i>\${tn(i)}\${G.props[i].factory?' 🏭':G.props[i].houses?' 🏠'+fa(G.props[i].houses):''}<small>\${short(assetValue(i))}</small></span>\`}
function renderTrade(){const dlg=$('#tradeDlg'),A=G.players[T.a];
  if(T.step==='pick'){const opts=G.players.filter(p=>!p.out&&p.id!==T.a&&!p.remote);
    dlg.innerHTML=\`<div class="dlg"><h2>\${tr('با کی معامله می‌کنی؟','Trade with whom?')}</h2><p class="hint">\${tr(esc(A.name)+'، فقط یک نفر رو انتخاب کن. بقیه نمی‌تونن دخالت کنن.',esc(A.name)+', pick one player. Nobody else can interfere.')}</p><div class="pick">\${opts.map(p=>\`<button type="button" data-id="\${p.id}"><span class="mini">\${stoneHTML(p)}</span>\${esc(p.name)}</button>\`).join('')||\`<p class="hint">\${tr('کسی برای معامله نیست.','Nobody available to trade.')}</p>\`}</div><div class="tfoot"><button class="act alt" id="tCancel" type="button">\${tr('بی‌خیال','Never mind')}</button></div></div>\`;
    dlg.querySelectorAll('.pick button').forEach(b=>b.onclick=()=>{T.b=+b.dataset.id;T.step='build';Snd.press();renderTrade()});dlg.querySelector('#tCancel').onclick=()=>dlg.close();return}
  const Bp=G.players[T.b];
  if(T.step==='build'){
    const col=(p,set,key,cash)=>\`<div class="tcol"><h4><span class="mini">\${stoneHTML(p)}</span>\${p===A?tr('دارایی من','My assets'):tr('دارایی '+esc(p.name),esc(p.name)+'\\u2019s assets')}</h4>
      <div class="zone offer" data-side="\${key}" data-zone="in" data-empty="\${tr('بکش اینجا یا روی ملک کلیک کن','Drag here or tap a lot')}">\${[...set].map(chipHTML).join('')}</div>
      <div class="zone" data-side="\${key}" data-zone="out" data-empty="\${tr('ملکی نداره','No property')}">\${owned(p.id).filter(i=>!set.has(i)).map(chipHTML).join('')}</div>
      <div class="cashrow"><span>\${tr('پول نقد: ','Cash: ')}<b id="cv-\${key}">\${money(cash)}</b></span><input type="range" min="0" max="\${Math.max(0,Math.floor(p.cash/100000)*100000)}" step="100000" value="\${cash}" data-cash="\${key}"></div></div>\`;
    dlg.innerHTML=\`<div class="dlg"><h2>\${tr('معامله با '+esc(Bp.name),'Trade with '+esc(Bp.name))}</h2><div class="tcols">\${col(A,T.give,'give',T.cg)}\${col(Bp,T.take,'take',T.ct)}</div>
      <div class="tfoot"><button class="act good" id="tSend" type="button">\${tr('ارسال پیشنهاد','Send offer')}</button><button class="act alt" id="tBack" type="button">\${tr('عوض کردن طرف','Change partner')}</button><button class="act alt" id="tCancel" type="button">\${tr('بی‌خیال','Never mind')}</button></div></div>\`;
    dlg.querySelectorAll('.chip').forEach(c=>{const i=+c.dataset.i;c.onclick=()=>{toggleItem(i)};c.ondragstart=e=>{e.dataTransfer.setData('text/plain',i)}});
    dlg.querySelectorAll('.zone').forEach(z=>{z.ondragover=e=>{e.preventDefault();z.classList.add('over')};z.ondragleave=()=>z.classList.remove('over');
      z.ondrop=e=>{e.preventDefault();z.classList.remove('over');const i=+e.dataTransfer.getData('text/plain'),set=z.dataset.side==='give'?T.give:T.take,own=z.dataset.side==='give'?T.a:T.b;
        if(G.props[i].owner!==own)return;const want=z.dataset.zone==='in';if(want!==set.has(i))toggleItem(i)}});
    dlg.querySelectorAll('[data-cash]').forEach(r=>r.oninput=()=>{const k=r.dataset.cash;if(k==='give')T.cg=+r.value;else T.ct=+r.value;$('#cv-'+k).textContent=money(+r.value)});
    dlg.querySelector('#tBack').onclick=()=>{T.step='pick';T.give.clear();T.take.clear();T.cg=T.ct=0;renderTrade()};
    dlg.querySelector('#tCancel').onclick=()=>dlg.close();
    dlg.querySelector('#tSend').onclick=sendOffer;return}
  const nm=s=>[...s].map(i=>tn(i)).join(tr('، ',', '))||tr('هیچ ملکی','no property');
  const sum=\`<div class="tsum"><b>\${esc(A.name)}</b> \${tr('می‌ده: ','gives: ')}\${nm(T.give)}\${T.cg?' + '+money(T.cg):''}<br><b>\${esc(Bp.name)}</b> \${tr('می‌ده: ','gives: ')}\${nm(T.take)}\${T.ct?' + '+money(T.ct):''}</div>\`;
  if(T.step==='respond'){dlg.innerHTML=\`<div class="dlg"><h2>\${tr(esc(Bp.name)+'، قبول می‌کنی؟',esc(Bp.name)+', deal?')}</h2><p class="hint">\${tr('دستگاه رو بده به '+esc(Bp.name)+'.','Pass the device to '+esc(Bp.name)+'.')}</p>\${sum}<div class="tfoot"><button class="act good" id="tYes" type="button">\${tr('قبول','Accept')}</button><button class="act alt" id="tNo" type="button">\${tr('رد','Decline')}</button></div></div>\`;
    dlg.querySelector('#tYes').onclick=()=>finishTrade(true);dlg.querySelector('#tNo').onclick=()=>finishTrade(false);return}
  if(T.step==='wait'){dlg.innerHTML=\`<div class="dlg"><h2>\${esc(Bp.name)}</h2>\${sum}<p class="thinking">\${tr('داره حساب‌کتاب می‌کنه','Crunching the numbers')}</p></div>\`}}
function toggleItem(i){const set=G.props[i].owner===T.a?T.give:T.take;set.has(i)?set.delete(i):set.add(i);Snd.clink();renderTrade()}
function sendOffer(){if(!T.give.size&&!T.take.size&&!T.cg&&!T.ct)return toast(tr('یه چیزی بذار وسط دیگه!','Put something on the table!'));const Bp=G.players[T.b];
  if(Bp.bot){T.step='wait';renderTrade();setTimeout(()=>{const gets=[...T.give].reduce((s,i)=>s+assetValue(i),0)+T.cg,gives=[...T.take].reduce((s,i)=>s+assetValue(i),0)+T.ct;finishTrade(gets>=gives*1.1&&Bp.cash+T.cg-T.ct>=0)},1500)}
  else{T.step='respond';renderTrade()}}
function finishTrade(ok){const A=G.players[T.a],Bp=G.players[T.b],dlg=$('#tradeDlg');
  if(!ok){toast(tr(\`\${Bp.name} معامله رو رد کرد 🙅\`,\`\${Bp.name} turned it down 🙅\`));log(l=>L(l,\`\${Bp.name} پیشنهاد \${A.name} رو رد کرد.\`,\`\${Bp.name} declined \${A.name}'s offer.\`));dlg.close();closeTradeWindow();return}
  T.give.forEach(i=>G.props[i].owner=Bp.id);T.take.forEach(i=>G.props[i].owner=A.id);
  A.cash+=T.ct-T.cg;Bp.cash+=T.cg-T.ct;if(T.cg-T.ct)floatMoney(A,T.ct-T.cg);
  [...T.give,...T.take].forEach(i=>{const e=tileEls[i];e.classList.remove('swap');void e.offsetWidth;e.classList.add('swap')});
  sfx('whoosh');setTimeout(()=>Snd.coin(),300);toastAll({fa:'🤝 معامله انجام شد!',en:'🤝 Deal done!'});log(l=>L(l,\`🤝 \${A.name} و \${Bp.name} معامله کردن.\`,\`🤝 \${A.name} and \${Bp.name} made a deal.\`));dlg.close();closeTradeWindow();renderAll()}

/* =====================================================================
   CHAT · real-time in online rooms, shared table-talk in local games
   ===================================================================== */
const QUICK=[{fa:'👋 سلام!',en:'👋 Hi!'},{fa:'😂',en:'😂'},{fa:'🔥 عالی بود',en:'🔥 Nice one'},{fa:'😤 بدشانسی!',en:'😤 Unlucky!'},{fa:'🤝 معامله؟',en:'🤝 Trade?'},{fa:'🎲 زود باش',en:'🎲 Hurry up'}];
const BANTER=[{fa:'این شهر مال منه 😎',en:'This city is mine 😎'},{fa:'اجاره‌ها رو آماده کن!',en:'Get your rent ready!'},{fa:'حالا می‌بینیم 🙂',en:'We\\u2019ll see 🙂'},{fa:'نیاوران رو به کسی نمی‌دم',en:'Not giving up Niavaran'},{fa:'تورم داره همه رو می‌خوره',en:'Inflation is eating everyone'},{fa:'😂😂',en:'😂😂'}];
const Chat={open:false,unread:0,
  reset(){this.unread=0;$('#chatList').innerHTML='';this.badge();this.empty();this.who();this.quick()},
  badge(){const b=$('#chatBadge');b.hidden=!this.unread;b.textContent=fa(Math.min(99,this.unread))},
  empty(){const l=$('#chatList');if(!l.children.length)l.innerHTML=\`<p class="c-empty">\${Room.role==='off'?tr('چت سر میز. هر چی بنویسی همه‌ی بازیکن‌های این دستگاه می‌بینن.','Table talk. Everyone at this device sees it.'):tr('هنوز پیامی نیست. اولین نفر باش!','No messages yet. Say hi!')}</p>\`},
  who(){const w=$('#chatWho');if(!w)return;w.textContent=Room.role==='off'?tr('بازی محلی','Local game'):tr('آنلاین · ','Online · ')+fa(G?G.players.filter(p=>p.remote||isLocal(p)).length:1)+tr(' نفر',' players')},
  quick(){const q=$('#chatQuick');if(!q)return;q.innerHTML=QUICK.map((x,k)=>\`<button type="button" data-q="\${k}">\${res(x)}</button>\`).join('');q.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>sendChat(res(QUICK[+b.dataset.q])))},
  add(m){const l=$('#chatList');const e=l.querySelector('.c-empty');if(e)e.remove();
    const me=viewer(),mine=m.from===myId&&(!me||m.pid===undefined||m.pid===me.id);
    const row=document.createElement('div');row.className='msg'+(mine?' mine':'');
    const t=new Date(m.ts||Date.now());
    row.innerHTML=\`<span class="c-dot" style="--pc:\${m.color||'var(--ink-3)'}"></span><div class="c-b"><div class="c-h"><b></b><time>\${fa(t.getHours())}:\${String(t.getMinutes()).padStart(2,'0').replace(/\\d/g,d=>fa(+d))}</time></div><p></p></div>\`;
    row.querySelector('b').textContent=m.name||'?';row.querySelector('p').textContent=m.text;l.appendChild(row);
    while(l.children.length>150)l.firstChild.remove();l.scrollTop=l.scrollHeight;
    if(!this.open&&!mine){this.unread++;this.badge();Snd.pop();const bc=$('#bChat');bc.classList.remove('ping');void bc.offsetWidth;bc.classList.add('ping')}}};
function sendChat(text){text=String(text||'').trim().slice(0,240);if(!text||!G)return;const me=viewer()||cur();
  const m={id:rid(),name:me.name,color:me.color,text,ts:Date.now(),from:myId,pid:me.id};
  if(Room.role==='guest')Net.send(Room.host,{type:'chat',m});else Room.emit('chat',{m});
  Chat.add(m);botBanter()}
function botBanter(){if(Room.role==='guest'||!G||Math.random()>.35)return;const bots=G.players.filter(p=>p.bot&&!p.out);if(!bots.length)return;
  const b=bots[rnd(bots.length)],line=BANTER[rnd(BANTER.length)];
  setTimeout(()=>{if(!G)return;const m={id:rid(),name:b.name,color:b.color,text:res(line),ts:Date.now(),from:'bot',pid:b.id};Chat.add(m);Room.emit('chat',{m})},1200+Math.random()*1800)}
function openChat(){Chat.open=true;Chat.unread=0;Chat.badge();Chat.who();$('#propsPanel').classList.add('closed');$('#chatPanel').classList.remove('closed');$('#bChat').setAttribute('aria-expanded','true');const l=$('#chatList');l.scrollTop=l.scrollHeight;setTimeout(()=>$('#chatIn').focus({preventScroll:true}),250)}
function closeChat(){Chat.open=false;$('#chatPanel').classList.add('closed');$('#bChat').setAttribute('aria-expanded','false')}
$('#bChat').onclick=()=>{Snd.press();Chat.open?closeChat():openChat()};
$('#chatClose').onclick=closeChat;
onSubmit($('#chatIn'),$('#chatSend'),()=>{const i=$('#chatIn');sendChat(i.value);i.value='';i.focus()});

/* ---------------- CHROME: HUD menu, settings, keys ---------------- */
let exitArm=0;
$('#bHome').onclick=e=>{e.stopPropagation();Snd.press();const m=$('#gMenu');m.hidden=!m.hidden;exitArm=0;$('#gExit').textContent=tr('خروج به منوی اصلی','Exit to main menu');$('#bHome').setAttribute('aria-expanded',String(!m.hidden))};
$('#gMenu').addEventListener('click',e=>e.stopPropagation());
$('#gResume').onclick=()=>{$('#gMenu').hidden=true};
$('#gSettings').onclick=()=>{$('#gMenu').hidden=true;renderPrefs();$('#setDlg').showModal()};
$('#gExit').onclick=()=>{if(Date.now()-exitArm<4000){exitArm=0;backToMenu()}else{exitArm=Date.now();$('#gExit').textContent=Room.role!=='off'?tr('مطمئنی؟ از بازی آنلاین خارج می‌شی','Sure? You\\u2019ll leave the online game'):tr('مطمئنی؟ بازی از دست می‌ره','Sure? This game will be lost')}};
$('#setClose').onclick=()=>$('#setDlg').close();
$('#bProps').onclick=()=>{closeChat();$('#propsPanel').classList.toggle('closed')};
if(innerWidth<820)$('#propsPanel').classList.add('closed');
addEventListener('keydown',e=>{if(!G||!$('#game').classList.contains('active')||$('#tradeDlg').open||$('#setDlg').open)return;
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName))return;
  if(e.key==='Escape'){$('#gMenu').hidden=true;closeChat();return}
  if(e.code==='Space'){e.preventDefault();if(isLocal(cur()))act('roll')}
  else if(e.key==='Enter'&&G.phase==='end'&&isLocal(cur()))act('end');
  else if(e.key==='ArrowLeft')rotate(-1);else if(e.key==='ArrowRight')rotate(1);
  else if(e.key==='c'||e.key==='C'){e.preventDefault();openChat()}});

/* boot */
applyLang();frBadge();
</script>
</body>
</html>
`;

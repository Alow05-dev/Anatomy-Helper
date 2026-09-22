const esc=(s)=>s;
const defs={
front:`<svg id="skeletonSvg" viewBox="0 0 520 700" role="img" aria-label="Anterior skeletal anatomy">
<defs><filter id="boneShadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity=".18"/></filter><radialGradient id="boneGrad"><stop offset="0" stop-color="#f7f3e9"/><stop offset=".75" stop-color="#e1dccf"/><stop offset="1" stop-color="#c9c2b5"/></radialGradient></defs>
<g transform="translate(0 0)">
<ellipse class="bone" data-id="skull" cx="260" cy="68" rx="48" ry="55" fill="url(#boneGrad)"/>
<path class="bone" data-id="mandible" d="M222 82 Q260 108 298 82 L290 108 Q260 125 230 108Z"/>
<path class="bone" data-id="cervical" d="M248 118 L272 118 L276 164 L244 164Z"/>
<path class="bone" data-id="clavicle" d="M248 143 Q202 130 145 157 L150 169 Q202 149 252 161Z"/><path class="bone" data-id="clavicle" d="M272 143 Q318 130 375 157 L370 169 Q318 149 268 161Z"/>
<path class="bone" data-id="scapula" d="M157 160 Q119 176 136 228 Q158 218 181 182Z"/><path class="bone" data-id="scapula" d="M363 160 Q401 176 384 228 Q362 218 339 182Z"/>
<path class="bone" data-id="sternum" d="M247 154 L273 154 L281 265 L239 265Z"/>
<path class="bone" data-id="ribs" d="M242 166 Q185 168 162 204 Q186 181 241 188 M242 192 Q187 198 169 232 Q192 207 242 213 M242 220 Q191 229 179 256 Q202 235 241 239 M278 166 Q335 168 358 204 Q334 181 279 188 M278 192 Q333 198 351 232 Q328 207 278 213 M278 220 Q329 229 341 256 Q318 235 279 239" fill="none" stroke="var(--bone-edge)" stroke-width="12" stroke-linecap="round"/>
<path class="bone" data-id="pelvis" d="M205 260 Q260 282 315 260 L330 315 Q304 347 260 347 Q216 347 190 315Z"/>
<path class="bone" data-id="humerus" d="M143 166 Q126 171 131 194 L158 292 L180 287 L160 190 Q157 170 143 166Z"/><path class="bone" data-id="humerus" d="M377 166 Q394 171 389 194 L362 292 L340 287 L360 190 Q363 170 377 166Z"/>
<path class="bone" data-id="radius" d="M159 289 L176 286 L199 380 L181 385Z"/><path class="bone" data-id="ulna" d="M176 286 L190 290 L208 379 L190 384Z"/><path class="bone" data-id="radius" d="M361 289 L344 286 L321 380 L339 385Z"/><path class="bone" data-id="ulna" d="M344 286 L330 290 L312 379 L330 384Z"/>
<path class="bone" data-id="carpals" d="M181 378 L208 378 L213 398 L186 400Z"/><path class="bone" data-id="carpals" d="M312 378 L339 378 L334 400 L307 398Z"/>
<path class="bone" data-id="metacarpals" d="M184 398 L213 397 L225 438 L197 438Z"/><path class="bone" data-id="metacarpals" d="M307 397 L336 398 L323 438 L295 438Z"/>
<path class="bone" data-id="phalanges_hand" d="M196 437 L225 437 L231 474 L202 474Z"/><path class="bone" data-id="phalanges_hand" d="M295 437 L324 437 L318 474 L289 474Z"/>
<path class="bone" data-id="femur" d="M224 325 L254 337 L246 472 L220 472Z"/><path class="bone" data-id="femur" d="M296 325 L266 337 L274 472 L300 472Z"/>
<ellipse class="bone" data-id="patella" cx="235" cy="489" rx="15" ry="13"/><ellipse class="bone" data-id="patella" cx="285" cy="489" rx="15" ry="13"/>
<path class="bone" data-id="tibia" d="M218 502 L245 502 L249 620 L225 620Z"/><path class="bone" data-id="fibula" d="M246 502 L258 502 L259 620 L250 620Z"/><path class="bone" data-id="tibia" d="M302 502 L275 502 L271 620 L295 620Z"/><path class="bone" data-id="fibula" d="M274 502 L262 502 L261 620 L270 620Z"/>
<path class="bone" data-id="tarsals" d="M224 620 L258 620 L268 650 L215 650Z"/><path class="bone" data-id="tarsals" d="M262 620 L296 620 L305 650 L252 650Z"/>
<path class="bone" data-id="metatarsals" d="M215 649 L268 649 L273 674 L210 674Z"/><path class="bone" data-id="metatarsals" d="M252 649 L305 649 L310 674 L247 674Z"/>
<path class="bone" data-id="phalanges_foot" d="M210 673 L273 673 L277 692 L205 692Z"/><path class="bone" data-id="phalanges_foot" d="M247 673 L310 673 L315 692 L242 692Z"/>
<circle class="joint" data-id="tmj" cx="223" cy="98" r="7"/><circle class="joint" data-id="tmj" cx="297" cy="98" r="7"/>
<circle class="joint" data-id="shoulder" cx="145" cy="169" r="9"/><circle class="joint" data-id="shoulder" cx="375" cy="169" r="9"/>
<circle class="joint" data-id="elbow" cx="170" cy="290" r="9"/><circle class="joint" data-id="elbow" cx="350" cy="290" r="9"/>
<circle class="joint" data-id="wrist" cx="195" cy="389" r="8"/><circle class="joint" data-id="wrist" cx="325" cy="389" r="8"/>
<circle class="joint" data-id="hip" cx="225" cy="324" r="10"/><circle class="joint" data-id="hip" cx="295" cy="324" r="10"/>
<circle class="joint" data-id="knee" cx="235" cy="489" r="10"/><circle class="joint" data-id="knee" cx="285" cy="489" r="10"/>
<circle class="joint" data-id="ankle" cx="242" cy="622" r="8"/><circle class="joint" data-id="ankle" cx="278" cy="622" r="8"/>
</g></svg>`,
back:`<svg id="skeletonSvg" viewBox="0 0 520 700" role="img" aria-label="Posterior skeletal anatomy">
<defs><filter id="boneShadow"><feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-opacity=".18"/></filter></defs>
<ellipse class="bone" data-id="skull" cx="260" cy="68" rx="48" ry="55"/>
<path class="bone" data-id="cervical" d="M248 112 L272 112 L276 175 L244 175Z"/>
<path class="bone" data-id="scapula" d="M157 158 Q118 170 134 230 Q159 219 183 181Z"/><path class="bone" data-id="scapula" d="M363 158 Q402 170 386 230 Q361 219 337 181Z"/>
<path class="bone" data-id="thoracic" d="M248 160 L272 160 L280 275 L240 275Z"/>
<path class="bone" data-id="lumbar" d="M243 270 L277 270 L282 326 L238 326Z"/>
<path class="bone" data-id="pelvis" d="M205 300 Q260 326 315 300 L330 355 Q304 382 260 382 Q216 382 190 355Z"/>
<path class="bone" data-id="humerus" d="M143 166 Q126 171 131 194 L158 292 L180 287 L160 190 Q157 170 143 166Z"/><path class="bone" data-id="humerus" d="M377 166 Q394 171 389 194 L362 292 L340 287 L360 190 Q363 170 377 166Z"/>
<path class="bone" data-id="radius" d="M159 289 L176 286 L199 380 L181 385Z"/><path class="bone" data-id="ulna" d="M176 286 L190 290 L208 379 L190 384Z"/><path class="bone" data-id="radius" d="M361 289 L344 286 L321 380 L339 385Z"/><path class="bone" data-id="ulna" d="M344 286 L330 290 L312 379 L330 384Z"/>
<path class="bone" data-id="carpals" d="M181 378 L208 378 L213 398 L186 400Z"/><path class="bone" data-id="carpals" d="M312 378 L339 378 L334 400 L307 398Z"/>
<path class="bone" data-id="femur" d="M224 350 L254 362 L246 492 L220 492Z"/><path class="bone" data-id="femur" d="M296 350 L266 362 L274 492 L300 492Z"/>
<path class="bone" data-id="tibia" d="M218 505 L245 505 L249 620 L225 620Z"/><path class="bone" data-id="fibula" d="M246 505 L258 505 L259 620 L250 620Z"/><path class="bone" data-id="tibia" d="M302 505 L275 505 L271 620 L295 620Z"/><path class="bone" data-id="fibula" d="M274 505 L262 505 L261 620 L270 620Z"/>
<path class="bone" data-id="tarsals" d="M224 620 L258 620 L268 650 L215 650Z"/><path class="bone" data-id="tarsals" d="M262 620 L296 620 L305 650 L252 650Z"/>
<path class="bone" data-id="phalanges_foot" d="M210 649 L273 649 L277 692 L205 692Z"/><path class="bone" data-id="phalanges_foot" d="M247 649 L310 649 L315 692 L242 692Z"/>
<circle class="joint" data-id="shoulder" cx="145" cy="169" r="9"/><circle class="joint" data-id="shoulder" cx="375" cy="169" r="9"/><circle class="joint" data-id="elbow" cx="170" cy="290" r="9"/><circle class="joint" data-id="elbow" cx="350" cy="290" r="9"/><circle class="joint" data-id="hip" cx="225" cy="350" r="10"/><circle class="joint" data-id="hip" cx="295" cy="350" r="10"/><circle class="joint" data-id="knee" cx="235" cy="500" r="10"/><circle class="joint" data-id="knee" cx="285" cy="500" r="10"/><circle class="joint" data-id="ankle" cx="242" cy="622" r="8"/><circle class="joint" data-id="ankle" cx="278" cy="622" r="8"/>
</svg>`,
left:`<svg id="skeletonSvg" viewBox="0 0 520 700" role="img" aria-label="Left lateral skeletal anatomy">
<ellipse class="bone" data-id="skull" cx="260" cy="68" rx="48" ry="55"/><path class="bone" data-id="mandible" d="M220 82 Q260 108 298 82 L290 108 Q260 125 230 108Z"/><path class="bone" data-id="vertebrae" d="M248 115 L272 115 L275 325 L245 325Z"/><path class="bone" data-id="ribs" d="M246 155 Q210 175 226 270 Q250 286 278 270 Q292 180 270 155Z"/><path class="bone" data-id="pelvis" d="M220 300 Q260 320 300 300 L312 360 Q270 385 228 360Z"/><path class="bone" data-id="humerus" d="M235 160 L270 160 L285 290 L250 295Z"/><path class="bone" data-id="radius" d="M250 290 L270 290 L285 390 L265 392Z"/><path class="bone" data-id="ulna" d="M235 290 L255 290 L270 390 L250 392Z"/><path class="bone" data-id="femur" d="M240 350 L275 350 L280 495 L245 495Z"/><ellipse class="bone" data-id="patella" cx="260" cy="505" rx="13" ry="11"/><path class="bone" data-id="tibia" d="M242 518 L272 518 L280 635 L245 635Z"/><path class="bone" data-id="tarsals" d="M242 635 L280 635 L295 665 L230 665Z"/><path class="bone" data-id="phalanges_foot" d="M230 664 L295 664 L305 690 L220 690Z"/><circle class="joint" data-id="shoulder" cx="250" cy="165" r="9"/><circle class="joint" data-id="elbow" cx="260" cy="292" r="9"/><circle class="joint" data-id="hip" cx="250" cy="350" r="10"/><circle class="joint" data-id="knee" cx="260" cy="505" r="10"/><circle class="joint" data-id="ankle" cx="260" cy="637" r="8"/></svg>`,
right:`<svg id="skeletonSvg" viewBox="0 0 520 700" role="img" aria-label="Right lateral skeletal anatomy">
<ellipse class="bone" data-id="skull" cx="260" cy="68" rx="48" ry="55"/><path class="bone" data-id="mandible" d="M220 82 Q260 108 298 82 L290 108 Q260 125 230 108Z"/><path class="bone" data-id="vertebrae" d="M248 115 L272 115 L275 325 L245 325Z"/><path class="bone" data-id="ribs" d="M246 155 Q210 175 226 270 Q250 286 278 270 Q292 180 270 155Z"/><path class="bone" data-id="pelvis" d="M220 300 Q260 320 300 300 L312 360 Q270 385 228 360Z"/><path class="bone" data-id="humerus" d="M235 160 L270 160 L285 290 L250 295Z"/><path class="bone" data-id="radius" d="M250 290 L270 290 L285 390 L265 392Z"/><path class="bone" data-id="ulna" d="M235 290 L255 290 L270 390 L250 392Z"/><path class="bone" data-id="femur" d="M240 350 L275 350 L280 495 L245 495Z"/><ellipse class="bone" data-id="patella" cx="260" cy="505" rx="13" ry="11"/><path class="bone" data-id="tibia" d="M242 518 L272 518 L280 635 L245 635Z"/><path class="bone" data-id="tarsals" d="M242 635 L280 635 L295 665 L230 665Z"/><path class="bone" data-id="phalanges_foot" d="M230 664 L295 664 L305 690 L220 690Z"/><circle class="joint" data-id="shoulder" cx="250" cy="165" r="9"/><circle class="joint" data-id="elbow" cx="260" cy="292" r="9"/><circle class="joint" data-id="hip" cx="250" cy="350" r="10"/><circle class="joint" data-id="knee" cx="260" cy="505" r="10"/><circle class="joint" data-id="ankle" cx="260" cy="637" r="8"/></svg>`
};
export function makeSkeleton(view){return defs[view]||defs.front}

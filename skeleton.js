const B=(id,d)=>`<path class="bone" data-id="${id}" d="${d}"/>`;
const E=(id,cx,cy,rx,ry)=>`<ellipse class="bone" data-id="${id}" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"/>`;
const C=(id,cx,cy,r=8)=>`<circle class="joint" data-id="${id}" cx="${cx}" cy="${cy}" r="${r}"/>`;
function common(view){
return `<svg id="skeletonSvg" viewBox="0 0 520 760" role="img" aria-label="${view} skeletal view">
<defs><filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity=".24"/></filter><linearGradient id="boneG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff8e8"/><stop offset=".55" stop-color="#e8e0cf"/><stop offset="1" stop-color="#bdb3a1"/></linearGradient></defs>
<g>
${E("skull",260,62,49,57)}${B("mandible","M218 80 Q260 112 302 80 L292 112 Q260 132 228 112Z")}${B("cervical","M246 116 L274 116 L278 178 L242 178Z")}
${B("clavicle","M249 146 Q198 132 136 160 L142 173 Q199 151 252 164Z")}${B("clavicle","M271 146 Q322 132 384 160 L378 173 Q321 151 268 164Z")}
${B("scapula","M153 160 Q112 176 132 238 Q158 225 183 183Z")}${B("scapula","M367 160 Q408 176 388 238 Q362 225 337 183Z")}
${B("sternum","M247 157 L273 157 L281 277 L239 277Z")}
<g class="bone-detail"><path d="M242 173 Q188 174 166 207"/><path d="M242 200 Q191 203 173 236"/><path d="M242 229 Q198 235 185 264"/><path d="M278 173 Q332 174 354 207"/><path d="M278 200 Q329 203 347 236"/><path d="M278 229 Q322 235 335 264"/></g>
${B("ribs","M242 166 Q184 170 160 211 Q186 188 242 191 L242 205 Q192 209 168 240 Q195 218 242 218 L242 232 Q199 237 180 268 Q204 249 241 247 L241 260 Q210 269 199 285 Q225 276 242 274 L242 166Z")}
${B("ribs","M278 166 Q336 170 360 211 Q334 188 278 191 L278 205 Q328 209 352 240 Q325 218 278 218 L278 232 Q321 237 340 268 Q316 249 279 247 L279 260 Q310 269 321 285 Q295 276 278 274 L278 166Z")}
${B("pelvis","M205 277 Q260 300 315 277 L332 342 Q306 377 260 377 Q214 377 188 342Z")}
${B("humerus","M140 171 Q121 176 128 199 L157 300 L181 294 L158 191 Q155 174 140 171Z")}${B("humerus","M380 171 Q399 176 392 199 L363 300 L339 294 L362 191 Q365 174 380 171Z")}
${B("radius","M157 297 L176 293 L199 399 L180 403Z")}${B("ulna","M177 294 L192 298 L210 399 L190 403Z")}
${B("radius","M363 297 L344 293 L321 399 L340 403Z")}${B("ulna","M343 294 L328 298 L310 399 L330 403Z")}
${B("carpals","M180 397 L211 397 L216 420 L184 422Z")}${B("carpals","M309 397 L340 397 L336 422 L304 420Z")}
${B("metacarpals","M184 419 L216 418 L224 462 L194 462Z")}${B("metacarpals","M304 418 L336 419 L326 462 L296 462Z")}
${B("finger_phalanges","M193 461 L224 461 L229 500 L199 500Z")}${B("finger_phalanges","M296 461 L327 461 L321 500 L291 500Z")}
${B("femur","M222 347 L255 358 L246 495 L219 495Z")}${B("femur","M298 347 L265 358 L274 495 L301 495Z")}
${E("patella",234,509,15,13)}${E("patella",286,509,15,13)}
${B("tibia","M217 522 L246 522 L251 651 L224 651Z")}${B("fibula","M247 522 L260 522 L261 651 L251 651Z")}
${B("tibia","M303 522 L274 522 L269 651 L296 651Z")}${B("fibula","M273 522 L260 522 L259 651 L249 651Z")}
${B("tarsals","M223 650 L260 650 L269 681 L211 681Z")}${B("tarsals","M260 650 L297 650 L309 681 L251 681Z")}
${B("metatarsals","M211 680 L269 680 L276 707 L204 707Z")}${B("metatarsals","M251 680 L309 680 L316 707 L244 707Z")}
${B("toe_phalanges","M204 706 L276 706 L282 733 L198 733Z")}${B("toe_phalanges","M244 706 L316 706 L322 733 L238 733Z")}
${C("tmj",220,98,7)}${C("tmj",300,98,7)}${C("shoulder",143,171,9)}${C("shoulder",377,171,9)}${C("elbow",170,298,9)}${C("elbow",350,298,9)}${C("wrist",198,410,8)}${C("wrist",322,410,8)}${C("hip",224,347,10)}${C("hip",296,347,10)}${C("knee",234,509,10)}${C("knee",286,509,10)}${C("ankle",242,654,8)}${C("ankle",278,654,8)}${C("toe_joint",220,710,6)}${C("toe_joint",300,710,6)}
</g></svg>`;
}
export function skeleton(view){return common(view)}

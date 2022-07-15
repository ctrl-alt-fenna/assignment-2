import hand_a from "../img/a.png"
import hand_b from "../img/b.png"
import hand_c from "../img/c.png"
import hand_d from "../img/d.png"
import hand_e from "../img/e.png"
import hand_f from "../img/f.png"
import hand_g from "../img/g.png"
import hand_h from "../img/h.png"
import hand_i from "../img/i.png"
import hand_j from "../img/j.png"
import hand_k from "../img/k.png"
import hand_l from "../img/l.png"
import hand_m from "../img/m.png"
import hand_n from "../img/n.png"
import hand_o from "../img/o.png"
import hand_p from "../img/p.png"
import hand_q from "../img/q.png"
import hand_r from "../img/r.png"
import hand_s from "../img/s.png"
import hand_t from "../img/t.png"
import hand_u from "../img/u.png"
import hand_v from "../img/v.png"
import hand_w from "../img/w.png"
import hand_x from "../img/x.png"
import hand_y from "../img/y.png"
import hand_z from "../img/z.png"
export const handSigns = {
     a: hand_a,
     b: hand_b,
     c: hand_c,
     d: hand_d,
     e: hand_e,
     f: hand_f,
     g: hand_g,
     h: hand_h,
     i: hand_i,
     j: hand_j,
     k: hand_k,
     l: hand_l,
     m: hand_m,
     n: hand_n,
     o: hand_o,
     p: hand_p,
     q: hand_q,
     r: hand_r,
     s: hand_s,
     t: hand_t,
     u: hand_u,
     v: hand_v,
     w: hand_w,
     x: hand_x,
     y: hand_y,
     z: hand_z,
}
export const getImagePath = (letter) =>
{
    console.log(letter)
    return handSigns[letter]
}
export default handSigns
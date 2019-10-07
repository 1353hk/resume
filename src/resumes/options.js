import yaml from 'js-yaml';
import { PERSON } from '../../resume/data.yml';
import { terms } from '../terms';

import img1 from '../../resume/猜歌达人.png';
import img2 from '../../resume/成语大师Lite.png';
import img3 from '../../resume/壁虎淘车.jpg';
import img4 from '../../resume/易改衣.jpg';
import img5 from '../../resume/香港宽频二维码.png';
import img6 from '../../resume/易改衣二维码.png';

// Called by templates to decrease redundancy
function getVueOptions(name) {
    const opt = {
        name: name,
        data() {
            return {
                person: yaml.load(PERSON),
                terms: terms,
                imgs: [img1, img2, img3, img4, img5, img6],
            };
        },
        computed: {
            lang() {
                const defaultLang = this.terms.en;
                const useLang = this.terms[this.person.lang];

                // overwrite non-set fields with default lang
                Object.keys(defaultLang)
                    .filter((k) => !useLang[k])
                    .forEach((k) => {
                        console.log(k);
                        useLang[k] = defaultLang[k];
                    });

                return useLang;
            },
        },
    };
    return opt;
}

export { getVueOptions };

import React from 'react';
import styles from "../style";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

const globoRotation = () => (

    <section className={`sm:px-32 px-6 sm:py-48 py-8  bg-gradient-to-r from-zinc-800 via-sky-500 to-slate-800       rounded-full  `}>

        
            <TagCloud
                options={(w) => ({
                    radius: Math.min(400, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "normal",
                    deceleration: 100,
                    //keep: false,
                    initSpeed: "fast",
                    useContainerInlineStyles: false, // CENTRALIZA O GLOBO
                    //useItemInlineStyles: false,

                })}
                onClick={(tag, ev) => alert(tag)}
                onClickOptions={{ passive: true }}
            >
                {[
                    "React-Js",
                    "React-Native",
                    "Angular",
                    "Spring-Boot",
                    "Oracle",
                    "Postgresql",
                    "Next",
                    "Github",
                    "Heroku",
                    "Clound",
                    "Firebase",
                    "Spring-Security",
                ]}
            </TagCloud>
        
    </section>
);

export default globoRotation;
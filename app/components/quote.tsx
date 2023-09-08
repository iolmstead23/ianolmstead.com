"use client"

import { motion } from "framer-motion"

const line: string = "Any sufficiently advanced technology is equivalent to magic. - Arthur C. Clarke"

const sentence = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
}

const letter = {
    hidden: { opacity: 0, y:50},
    visible: {
        opacity: 1,
        y: 0,
    },
}

export default function Quote() {
    return (
        <div>
            <motion.h3
                className="load-screen--message"
                variants={sentence}
                initial="hidden"
                animate="visible">
                <i>{line.split("").map((char, index) => {
                        return (
                            <motion.span key={char + "-" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                </i>
            </motion.h3>
        </div>
    )
}
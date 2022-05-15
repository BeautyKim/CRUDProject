import styled from "../styles/Home.module.css"

export function Home() {
    return (<>
        <head>
            <link rel="styled" href="../styles/Home.module.css"/>
        </head>
        <body>
            <h2 className={styled.h2 + styled.border + styled.wave} >wavy</h2>
            <h2 class="wave">wavy</h2>

            <h2 class="border two">wavy</h2>
            <h2 class="wave two">wavy</h2>

            <h2 class="border three">wavy</h2>
            <h2 class="wave three">wavy</h2>
        </body>

    </>
    )
}
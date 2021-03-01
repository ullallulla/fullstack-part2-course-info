import React from 'react'


const Header = (props) => {
    console.log('header props', props)

    const { course } = props

    return (
        <div>
            <h1>
                {course}
            </h1>
        </div>
    )

}

const Part = (props) => {
    console.log('part props', props)

    const { part } = props

    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>

        </div>
    )

}

const Content = (props) => {
    console.log('content props', props)

    const { course } = props

    return (
        <div>
            {course.map(part =>
                <Part key={part.id} part={part} />
            )}
        </div>
    )

}

const Total = (props) => {
    console.log('total props', props)

    const { course } = props

    let totalExercises = course.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            <p>
                <b>total of exercises {totalExercises}</b>
            </p>
        </div>
    )
}

const Course = (props) => {
    console.log('course props', props)
    const { course } = props
    return (
        <div>


            <Header course={course.name} />


            <Content course={course.parts} />


            <Total course={course.parts} />


        </div>
    )
}


export default Course
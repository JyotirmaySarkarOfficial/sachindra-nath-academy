import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'

import clickSound from '../assets/sounds/click.mp3'
import successSound from '../assets/sounds/success.mp3'
import errorSound from '../assets/sounds/error.mp3'

import sudokuLevels from '../data/sudokuLevels'

function SudokuPage() {

 const [hintsLeft, setHintsLeft] =
  useState(3)


  /* =========================================
     AUDIO
  ========================================= */

  const clickAudio = new Audio(clickSound)

  const successAudio =
    new Audio(successSound)

  const errorAudio =
    new Audio(errorSound)

  /* =========================================
     STATES
  ========================================= */

  const [currentLevel, setCurrentLevel] =
    useState(1)

  const [board, setBoard] = useState([])

  const [selectedCell, setSelectedCell] =
    useState(null)

  const [completedLevels, setCompletedLevels] =
    useState([])

  const [seconds, setSeconds] =
    useState(0)

  const [showConfetti, setShowConfetti] =
    useState(false)

  const [showWinCard, setShowWinCard] =
    useState(false)

  const [bestTime, setBestTime] =
    useState(null)

  const [mistakes, setMistakes] =
    useState(0)

  /* =========================================
     CURRENT LEVEL
  ========================================= */

  const levelData = sudokuLevels.find(
    (item) => item.level === currentLevel
  )

  /* =========================================
     LOAD COMPLETED LEVELS
  ========================================= */

  useEffect(() => {

    const savedLevels = JSON.parse(
      localStorage.getItem(
        'completedSudokuLevels'
      ) || '[]'
    )

    setCompletedLevels(savedLevels)
    

  }, [])

  /* =========================================
     LOAD BOARD
  ========================================= */

  useEffect(() => {

    if (levelData) {

      setBoard(
        levelData.puzzle.map((row) => [...row])
      )

      setSelectedCell(null)

      setSeconds(0)

      setMistakes(0)

      const savedBest = localStorage.getItem(
        `bestTime-level-${currentLevel}`
      )

      if (savedBest) {

        setBestTime(Number(savedBest))

      } else {

        setBestTime(null)
      }
    }
    setHintsLeft(3)

  }, [currentLevel])

  /* =========================================
     TIMER
  ========================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setSeconds((prev) => prev + 1)

    }, 1000)

    return () => clearInterval(interval)

  }, [currentLevel])

  /* =========================================
     FORMAT TIME
  ========================================= */

  const formatTime = (seconds) => {

    const mins = Math.floor(
      seconds / 60
    )

    const secs = seconds % 60

    return `${mins
      .toString()
      .padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  /* =========================================
     HANDLE CHANGE
  ========================================= */

  const handleChange = (
    rowIndex,
    colIndex,
    value
  ) => {

    const updatedBoard = [...board]

    updatedBoard[rowIndex][colIndex] =
      value

    setBoard(updatedBoard)

    if (
      value !==
      levelData.solution[rowIndex][colIndex]
    ) {

      setMistakes((prev) => prev + 1)

      errorAudio.currentTime = 0
      errorAudio.play()

    } else {

      clickAudio.currentTime = 0
      clickAudio.play()
    }
  }

  /* =========================================
     CHECK SOLUTION
  ========================================= */

  const checkSolution = () => {

    const solved = board.every(
      (row, rowIndex) =>
        row.every(
          (cell, colIndex) =>
            cell ===
            levelData.solution[rowIndex][colIndex]
        )
    )

    if (solved) {

      successAudio.play()

      setShowConfetti(true)

      setTimeout(() => {

        setShowConfetti(false)

      }, 5000)

      const updatedCompleted = [
        ...new Set([
          ...completedLevels,
          currentLevel,
        ]),
      ]

      setCompletedLevels(updatedCompleted)

      localStorage.setItem(
        'completedSudokuLevels',
        JSON.stringify(updatedCompleted)
      )

      const savedBest = localStorage.getItem(
        `bestTime-level-${currentLevel}`
      )

      if (
        !savedBest ||
        seconds < Number(savedBest)
      ) {

        localStorage.setItem(
          `bestTime-level-${currentLevel}`,
          seconds
        )

        setBestTime(seconds)
      }

      setShowWinCard(true)

    } else {

      errorAudio.play()

      alert(
        '❌ Some answers are incorrect.'
      )
    }
  }

  /* =========================================
     HINT SYSTEM
  ========================================= */

  const giveHint = () => {

    if (hintsLeft <= 0) {

      errorAudio.play()

      return
    }

    if (!selectedCell) {

      errorAudio.play()

      return
    }

    const row = selectedCell.row

    const col = selectedCell.col

    const isFixed =
      levelData.puzzle[row][col] !== ''

    if (isFixed) {

      errorAudio.play()

      return
    }

    const updatedBoard = [...board]

    updatedBoard[row][col] =
      levelData.solution[row][col]

    setBoard(updatedBoard)

    setHintsLeft((prev) => prev - 1)

    clickAudio.play()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">

      {/* CONFETTI */}

      {showConfetti && <Confetti />}

      {/* WIN CARD */}

      {showWinCard && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6">

          <motion.div
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl"
          >

            <h2 className="text-4xl font-extrabold text-blue-950">
              🎉 Level Complete!
            </h2>

            <p className="mt-6 text-xl text-gray-700">
              You solved Level {currentLevel}
            </p>

            <p className="mt-3 text-lg text-yellow-500 font-bold">
              Time: {formatTime(seconds)}
            </p>

            <p className="mt-3 text-lg text-red-500 font-bold">
              Mistakes: {mistakes}
            </p>

            <button
              onClick={() =>
                setShowWinCard(false)
              }
              className="mt-8 bg-blue-950 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300"
            >
              Continue
            </button>

          </motion.div>

        </div>

      )}

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >

          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950">
            Sudoku Challenge
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto md:text-justify">
            Solve Sudoku puzzles to improve
            concentration, logical thinking
            and problem-solving skills.
          </p>

        </motion.div>

        {/* RULES */}

        <div className="bg-white rounded-3xl shadow-xl p-8 mt-12">

          <h2 className="text-3xl font-bold text-blue-950">
            Rules
          </h2>

          <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-6">

            <li>
              Each row must contain numbers
              from 1 to 9.
            </li>

            <li>
              Each column must contain numbers
              from 1 to 9.
            </li>

            <li>
              Each 3×3 box must contain numbers
              from 1 to 9.
            </li>

            <li>
              Complete one level to unlock
              the next.
            </li>

          </ul>

        </div>

        {/* TIMER */}

        <div className="flex justify-center mt-12">

          <div className="bg-white shadow-xl px-8 py-4 rounded-2xl text-2xl font-bold text-blue-950">

            ⏱ {formatTime(seconds)}

          </div>

        </div>

        {/* BEST TIME */}

        {bestTime && (

          <div className="flex justify-center mt-4">

            <div className="bg-yellow-400 px-6 py-3 rounded-2xl text-lg font-bold text-blue-950 shadow-xl">

              🏆 Best Time:
              {' '}
              {formatTime(bestTime)}

            </div>

          </div>

        )}

        {/* MISTAKES */}

        <div className="flex justify-center mt-4">

          <div className="bg-red-100 px-6 py-3 rounded-2xl text-lg font-bold text-red-600 shadow-xl">

            ❌ Mistakes:
            {' '}
            {mistakes}

          </div>

        </div>

        {/* HINTS */}

        <div className="flex justify-center mt-4">

          <div className="bg-green-100 px-6 py-3 rounded-2xl text-lg font-bold text-green-700 shadow-xl">

            💡 Hints Left:
            {' '}
            {hintsLeft}

          </div>

        </div>

        {/* LEVELS */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
            Levels
          </h2>

          <div className="flex flex-wrap justify-center gap-4">

            {sudokuLevels
              .filter(
                (level) =>
                  level.level === 1 ||
                  completedLevels.includes(
                    level.level - 1
                  )
              )
              .map((level) => (

                <button
                  key={level.level}
                  onClick={() =>
                    setCurrentLevel(level.level)
                  }
                  className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                    currentLevel === level.level
                      ? 'bg-blue-950 text-white'
                      : 'bg-yellow-400 text-black hover:scale-105'
                  }`}
                >

                  Level {level.level}

                </button>

              ))}

          </div>

        </div>

        {/* BOARD */}

        <div className="mt-16 flex justify-center overflow-x-auto">

          <div className="grid grid-cols-9 border-4 border-blue-950 bg-white shadow-2xl">

            {board.map((row, rowIndex) =>
              row.map((cell, colIndex) => {

                const isFixed =
                  levelData.puzzle[rowIndex][colIndex] !== ''

                return (

                  <input
                    key={`${rowIndex}-${colIndex}`}
                    type="text"
                    readOnly
                    value={cell}
                    

                    onClick={() => {

                      clickAudio.currentTime = 0
                      clickAudio.play()

                      setSelectedCell({
                        row: rowIndex,
                        col: colIndex,
                        value: cell,
                      })
                    }}

                    className={`w-10 h-10 md:w-14 md:h-14 text-center border text-lg md:text-2xl font-bold outline-none transition duration-200

                    ${
                      isFixed
                        ? 'text-blue-950 font-extrabold'
                        : 'text-black'
                    }

                    ${
                      selectedCell &&
                      (
                        rowIndex === selectedCell.row ||
                        colIndex === selectedCell.col
                      )
                        ? 'bg-yellow-100'
                        : 'bg-white'
                    }

                    ${
                      selectedCell &&
                      Math.floor(rowIndex / 3) ===
                        Math.floor(selectedCell.row / 3) &&
                      Math.floor(colIndex / 3) ===
                        Math.floor(selectedCell.col / 3)
                        ? 'bg-blue-100'
                        : ''
                    }

                    ${
                      selectedCell &&
                      cell !== '' &&
                      cell === selectedCell.value
                        ? 'bg-yellow-400!'
                        : ''
                    }

                    ${
                      selectedCell &&
                      rowIndex === selectedCell.row &&
                      colIndex === selectedCell.col
                        ? 'bg-blue-950! text-white!'
                        : ''
                    }

                    ${
                      (colIndex + 1) % 3 === 0 &&
                      colIndex !== 8
                        ? 'border-r-4 border-r-blue-950'
                        : ''
                    }

                    ${
                      (rowIndex + 1) % 3 === 0 &&
                      rowIndex !== 8
                        ? 'border-b-4 border-b-blue-950'
                        : ''
                    }
                    `}
                  />

                )
              })
            )}

          </div>

        </div>

        {/* NUMBER PAD */}

        <div className="flex flex-wrap justify-center gap-3 mt-10">

          {[1,2,3,4,5,6,7,8,9].map(
            (number) => (

              <button
                key={number}
                onClick={() => {

                  if (!selectedCell) return

                  const isFixed =
                    levelData.puzzle[
                      selectedCell.row
                    ][
                      selectedCell.col
                    ] !== ''

                  if (isFixed) return

                  const updatedBoard = [...board]

                  updatedBoard[
                    selectedCell.row
                  ][
                    selectedCell.col
                  ] = number

                  setBoard(updatedBoard)

                  handleChange(
                    selectedCell.row,
                    selectedCell.col,
                    number
                  )
                }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-950 text-white text-2xl font-bold hover:scale-110 transition duration-300 shadow-xl"
              >

                {number}

              </button>

            )
          )}

        </div>

        {/* ACTIONS */}

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <button
            onClick={checkSolution}
            className="bg-blue-950 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl"
          >
            Check Solution
          </button>

          <button
            onClick={giveHint}
            disabled={hintsLeft <= 0}
            className={`px-8 py-4 rounded-full font-semibold transition duration-300 shadow-xl ${
              hintsLeft > 0
                ? 'bg-green-500 text-white hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            💡 Hint
          </button>

          <button
            onClick={() => {

              setBoard(
                levelData.puzzle.map((row) => [
                  ...row,
                ])
              )

              setSelectedCell(null)

              setSeconds(0)

              setMistakes(0)
            }}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl"
          >
            Reset Level
          </button>

          <Link
            to="/"
            className="bg-white border border-blue-950 text-blue-950 px-8 py-4 rounded-full font-semibold hover:bg-blue-950 hover:text-white transition duration-300 shadow-xl"
          >
            Back To Home
          </Link>

        </div>

      </div>

    </div>
  )
}

export default SudokuPage
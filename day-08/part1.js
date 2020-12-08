// eslint-disable-next-line import/prefer-default-export
export const resolvePart1 = (instructions) => {
  const { acc } = calculateNextStep(instructions, [], 0, 0);
  return acc;
};

export const calculateNextStep = (instructions, alreadyExecuted = [], index = 0, acc = 0) => {
  const currentInstruction = instructions[index];
  const newAlreadyExecuted = [...alreadyExecuted, index];

  let newAcc = acc;
  let nextIndex = index;
  if (isAccumulate(currentInstruction)) {
    newAcc += currentInstruction.value;
    nextIndex += 1;
  } else if (isNop(currentInstruction)) {
    nextIndex += 1;
  } else {
    nextIndex += currentInstruction.value;
  }

  if (alreadyExecuted.includes(nextIndex) || nextIndex > instructions.length - 1) {
    return {
      acc: newAcc,
      stack: newAlreadyExecuted,
    };
  }
  return calculateNextStep(instructions, newAlreadyExecuted, nextIndex, newAcc);
};

export const isAccumulate = (instruction) => instruction.key === 'acc';
export const isNop = (currentInstruction) => currentInstruction.key === 'nop';
export const isJump = (currentInstruction) => currentInstruction.key === 'jmp';

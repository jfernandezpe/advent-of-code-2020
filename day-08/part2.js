import {
  calculateNextStep, isAccumulate, isJump, isNop,
} from './part1.js';

export const resolvePart2 = (instructions) => {
  const { acc } = alterateAndCalcInstrunctions(instructions, [], 0, 0);

  return acc;
};

const alterateAndCalcInstrunctions = (instructions) => {
  const alterated = generatePossibleAlterations(instructions);

  return alterated.reduce((result, alteratedInstruction) => {
    if (resultNotFound(result)) {
      const { acc, stack } = calculateNextStep(alteratedInstruction);

      if (isLastInStackTheLastInstruction(stack, instructions)) {
        return { acc, stack };
      }
    }
    return result;
  }, null);
};

const resultNotFound = (result) => !result;

const isLastInStackTheLastInstruction = (stack, instructions) => {
  const lastInStack = stack[stack.length - 1];
  return lastInStack === instructions.length - 1;
};

export const generatePossibleAlterations = (instructions) => {
  let index = 0;
  const alterated = [];
  while (index < instructions.length) {
    const curentInstruction = instructions[index];

    if (!isAccumulate(curentInstruction)) {
      const alterateInstruction = alterateInstructions(instructions, index);
      alterated.push(alterateInstruction);
    }
    index += 1;
  }
  return alterated;
};

const alterateInstructions = (instructions, indexToAlterate) => instructions
  .map((instruction, instructionIndex) => {
    if (hasToAlterateThisInstruction(instructionIndex, indexToAlterate)) {
      if (isJump(instruction)) {
        return { key: 'nop', value: instruction.value };
      }
      if (isNop(instruction)) {
        return { key: 'jmp', value: instruction.value };
      }
    }
    return instruction;
  });

const hasToAlterateThisInstruction = (index1, index2) => index1 === index2;

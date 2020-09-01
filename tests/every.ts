import chai from 'chai';

const expect = chai.expect;

import { TQuiz, Quiz } from '../every';

const makeQuiz = (dataQuiz: TQuiz) => {
  const startQuiz = new Quiz(dataQuiz);

  startQuiz.run();

  return {
    output: startQuiz.output(),
  };
};

describe('Method from array => Every', () => {
  it('Deve retornar com o total de acertos true', () => {
    const dataQuiz: TQuiz = {
      nome: "Tiago Lima",
      respostas: [
        { questaoId: '01', ok: false },
        { questaoId: '02', ok: true },
      ]
    };
    
    expect(makeQuiz(dataQuiz).output.acertouTodas).to.be.true;
  });
});

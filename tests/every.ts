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
        { questaoId: '01', ok: true },
        { questaoId: '02', ok: true },
        { questaoId: '03', ok: true },
      ]
    };

    const acertouTodas = makeQuiz(dataQuiz).output.acertouTodas;

    expect(acertouTodas).to.be.true;
  });

  it('Deve retornar com o total de acertos false', () => {
    const dataQuiz: TQuiz = {
      nome: "Tiago Lima",
      respostas: [
        { questaoId: '01', ok: false },
        { questaoId: '02', ok: false },
        { questaoId: '03', ok: false },
      ]
    };

    const acertouTodas = makeQuiz(dataQuiz).output.acertouTodas;

    expect(acertouTodas).to.be.false;
  });
});

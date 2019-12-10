/*
  피카츄 진화시 피카츄 1마리와 사탕 12개 소모. 500XP와 사탕 1개 획득
  피카츄를 오박사에게 보내면 1개 사탕을 얻고 피카츄 1마리 사라짐
  최대 획득 XP를 구하시오
*/

// 경험치 계수
const xpFactor = 500;
/**
 * 피카츄와 사탕으로 얻을 수 있는 최대 경험치를 구하는 함수
 * @param {number} pikachuNum - 피카츄 개체수
 * @param {number} candyNum - 사탕 갯수
 * @param {number} xpNum - 누적 경험치
 */
export const pikachuCalc = (pikachuNum, candyNum, xp = 0) => {
  // 남은 피카츄가 없으면 중단
  if (pikachuNum < 1) return xp;

  // 진화시킬 캔디가 부족하면
  if (candyNum < 12) {
    // 부족한 사탕 수
    const lackCandyNum = 12 - candyNum;

    if (pikachuNum > lackCandyNum) {
      // 남은 피카츄 수가 필요한 사탕 개수보다 많다면 피카츄를 보내서 캔디를 채운 후 피카츄 진화
      return pikachuCalc(pikachuNum - lackCandyNum - 1, 1, xp + xpFactor);
    } else {
      return xp;
    }
  } else {
    // 캔디가 12개 이상이면 12개를 소모하여 피카츄 진화
    return pikachuCalc(--pikachuNum, candyNum - 11, xp + xpFactor);
  }
};

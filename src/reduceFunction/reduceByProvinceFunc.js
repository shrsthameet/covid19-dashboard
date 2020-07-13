// export let provinceList = [];
// export const male = [];
// export const female = [];
//
//
// export function reduceByProvinceFunc(inComingVal) {
// 	for (let key in inComingVal) {
// 		const allMale = inComingVal[key].filter((data) => data.Sex === "Male");
// 		const allFemale = inComingVal[key].filter((data) => data.Sex === "Female");
// 		const sumOfAllMale = allMale.reduce((sum, currentValue) => {
// 			return sum + parseInt(currentValue.Value);
// 		}, 0);
//
// 		const sumOfAllFemale = allFemale.reduce((sum, currentValue) => {
// 			return sum + parseInt(currentValue.Value);
// 		}, 0);
// 		male.push(sumOfAllMale);
// 		female.push(sumOfAllFemale);
// 		provinceList = Object.keys(inComingVal);
// 	}
// }

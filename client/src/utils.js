export const content = {
    text1: "def linearSearch(arr,x):$`for i in range(len(arr)):$``if arr[i] == x:$```return i$`return -1",
    text2: "int binarySearch(int arr[], int x) {$`int left = 0;$`int right = arr.length - 1;$`while (left <= right) {$``int mid = left + (right = left) / 2;$``if (arr[mid] == x) {$``` return mid;$``}$``else if (arr[mid] > x) {$``` right = mid - 1;$``}$``else {$```left = mid + 1;$``}$`return -1;",
    text3: "vector <int> twoSum(vector<int> & nums, int x) {$`unordered_map<int, int> hash;$`vector<int>result;$`for (int i = 0; i < nums.size(); i++) {$``int potentialMatch = x - nums[i];$``auto it = hash.find(potentialMatch);$``if (it != hash.end()) {$```res.push_pack(it->second);$```res.push_back(i);$```return res;$``}$``hash[nums[i]] = i;$`}$'`return res;$}",
    text4: "function reverseString(str) {$`let newString = \"\";$`for (let i = str.length - 1; i >= 0; i--) {$`` newString += str[i];$`}$`return newString;"
}

export let randomProperty = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

export const inputStyleStart = {
    backgroundColor: '#000000',
    color: '#57fed5'
}
  
export let inputStyleWin = {
    backgroundColor: 'black',
    color: '#57fed5',
    disabled: true
}

export const countCorrectSymbols = (userInput,text) => {
    const parsedText = text.replace(' ','')
    return userInput.replace( ' ', '').split('').filter((s,i) => s === parsedText[i]).length;
 }
 
 export const textArea = {

 }
 
 
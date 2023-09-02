console.clear();
import { of } from 'rxjs';
import { timeoutWith, delay, concatMap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/utility/timeoutwith
// Example 1: Timeout after 1 second

const fakeRequest = (delayTime) => of('!response!').pipe(delay(delayTime));
const requestTimeoutLogger = of('logging request timeout');
const timeoutThreshold = 1000;

of(timeoutThreshold + 1, timeoutThreshold - 1, timeoutThreshold + 3)
  .pipe(
    concatMap((e) =>
      fakeRequest(e).pipe(timeoutWith(timeoutThreshold, requestTimeoutLogger))
    )
  )
  .subscribe(console.log);

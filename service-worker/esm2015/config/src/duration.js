/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const /** @type {?} */ PARSE_TO_PAIRS = /([0-9]+[^0-9]+)/g;
const /** @type {?} */ PAIR_SPLIT = /^([0-9]+)([dhmsu]+)$/;
/**
 * @param {?} duration
 * @return {?}
 */
export function parseDurationToMs(duration) {
    const /** @type {?} */ matches = [];
    let /** @type {?} */ array;
    while ((array = PARSE_TO_PAIRS.exec(duration)) !== null) {
        matches.push(array[0]);
    }
    return matches
        .map(match => {
        const /** @type {?} */ res = PAIR_SPLIT.exec(match);
        if (res === null) {
            throw new Error(`Not a valid duration: ${match}`);
        }
        let /** @type {?} */ factor = 0;
        switch (res[2]) {
            case 'd':
                factor = 86400000;
                break;
            case 'h':
                factor = 3600000;
                break;
            case 'm':
                factor = 60000;
                break;
            case 's':
                factor = 1000;
                break;
            case 'u':
                factor = 1;
                break;
            default:
                throw new Error(`Not a valid duration unit: ${res[2]}`);
        }
        return parseInt(res[1]) * factor;
    })
        .reduce((total, value) => total + value, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zZXJ2aWNlLXdvcmtlci9jb25maWcvc3JjL2R1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsdUJBQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDO0FBQzFDLHVCQUFNLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQzs7Ozs7QUFFMUMsTUFBTSw0QkFBNEIsUUFBZ0I7SUFDaEQsdUJBQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUU3QixxQkFBSSxLQUEyQixDQUFDO0lBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEI7SUFDRCxNQUFNLENBQUMsT0FBTztTQUNULEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNYLHVCQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxxQkFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLEdBQUc7Z0JBQ04sTUFBTSxHQUFHLFFBQVEsQ0FBQztnQkFDbEIsS0FBSyxDQUFDO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLE1BQU0sR0FBRyxPQUFPLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQztZQUNSLEtBQUssR0FBRztnQkFDTixNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNmLEtBQUssQ0FBQztZQUNSLEtBQUssR0FBRztnQkFDTixNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNkLEtBQUssQ0FBQztZQUNSLEtBQUssR0FBRztnQkFDTixNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNYLEtBQUssQ0FBQztZQUNSO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0Q7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztLQUNsQyxDQUFDO1NBQ0QsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNqRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuY29uc3QgUEFSU0VfVE9fUEFJUlMgPSAvKFswLTldK1teMC05XSspL2c7XG5jb25zdCBQQUlSX1NQTElUID0gL14oWzAtOV0rKShbZGhtc3VdKykkLztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb25Ub01zKGR1cmF0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBtYXRjaGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGxldCBhcnJheTogUmVnRXhwRXhlY0FycmF5fG51bGw7XG4gIHdoaWxlICgoYXJyYXkgPSBQQVJTRV9UT19QQUlSUy5leGVjKGR1cmF0aW9uKSkgIT09IG51bGwpIHtcbiAgICBtYXRjaGVzLnB1c2goYXJyYXlbMF0pO1xuICB9XG4gIHJldHVybiBtYXRjaGVzXG4gICAgICAubWFwKG1hdGNoID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gUEFJUl9TUExJVC5leGVjKG1hdGNoKTtcbiAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGEgdmFsaWQgZHVyYXRpb246ICR7bWF0Y2h9YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZhY3RvcjogbnVtYmVyID0gMDtcbiAgICAgICAgc3dpdGNoIChyZXNbMl0pIHtcbiAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIGZhY3RvciA9IDg2NDAwMDAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICBmYWN0b3IgPSAzNjAwMDAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICBmYWN0b3IgPSA2MDAwMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgZmFjdG9yID0gMTAwMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3UnOlxuICAgICAgICAgICAgZmFjdG9yID0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBhIHZhbGlkIGR1cmF0aW9uIHVuaXQ6ICR7cmVzWzJdfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZUludChyZXNbMV0pICogZmFjdG9yO1xuICAgICAgfSlcbiAgICAgIC5yZWR1Y2UoKHRvdGFsLCB2YWx1ZSkgPT4gdG90YWwgKyB2YWx1ZSwgMCk7XG59XG4iXX0=
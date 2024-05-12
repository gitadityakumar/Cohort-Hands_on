import {describe, expect,it,test } from '@jest/globals'
import {sum} from '../index'

describe('sum module', ()=>{
    it('adds 1 + 2 to equal to 3', ()=>{
        expect(sum(1,2)).toBe(3);
    })
});
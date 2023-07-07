*/
Problem Link:
    https://leetcode.com/problems/boats-to-save-people/
/*

# @param {Integer[]} people
# @param {Integer} limit
# @return {Integer}
def num_rescue_boats(people, limit)
    boats = 0

    left = 0
    right = people.length - 1
    p(people.sort!)
    while (left <= right)
        if (people[left] + people[right] <= limit)
            left+=1
            right-=1
        else
            right-=1
        end
        boats+=1
    end
    boats
end

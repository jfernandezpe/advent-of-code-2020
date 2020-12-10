The first past has been super easy.

The second part... Instead of doing with my own brute force algorithm I checked for graph algorithm. I found the below explanation:

    Create a recursive function that takes index of node of a graph and the destination index. Keep a global or a static variable count to store the count.
    If the current nodes is the destination increase the count.
    Else for all the adjacent nodes, i.e. nodes that are accessible from the current node, call the recursive function with the index of adjacent node and the destination.
    Print the Count.

    Credits: [https://www.geeksforgeeks.org/count-possible-paths-two-vertices/

It was what I was thinking. So I implemented and executed. However, after several minutes it didn't finish. More than a second is unacceptable, so implemented a cache, there is not point in calculate the several times the same three for a node.

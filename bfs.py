class Graph:
    def __init__(self):
        self.graph = dict()#adjacency list
    
    def addEdge(self,u,v,dir):
        if dir==True:
            if u not in self.graph:
                self.graph[u] = [v]
            else:
                self.graph[u].append(v)
        else:
            if u not in self.graph:
                self.graph[u] = [v]
            else:
                self.graph[u].append(v)
            
            if v not in self.graph:
                self.graph[v] = [u]
            else:
                self.graph[v].append(u)

    def BFS(self,s):
        n = len(self.graph.keys())
        visited = [False]*n
        queue = []
        
        queue.append(s)
        visited[s] = True
        while len(queue)!=0:
            s = queue.pop(0)
            print(s)
            for i in self.graph[s]:
                if visited[i]==False:
                    queue.append(i)
                    visited[i]=True
    def DFSaux(self,s,visited):
        visited[s] = True
        # print(s)
        for i in self.graph[s]:
            if visited[i]==False:
                self.DFSaux(i,visited)

    def DFS(self):
        n = len(self.graph.keys())
        visited = [False]*n
        ctr = 0
        for i in range(n):
            if visited[i]==False:
                self.DFSaux(i,visited)
                ctr+=1
        print(ctr)


g = Graph()
dir = False
g.addEdge(0,1,dir)
g.addEdge(0,2,dir)
g.addEdge(3,4,dir)
g.addEdge(3,5,dir)
g.addEdge(6,7,dir)
g.addEdge(7,8,dir)
g.addEdge(9,10,dir)

print(g.graph)
# g.BFS(0)
g.DFS()




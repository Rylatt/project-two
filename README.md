

 <!--git hub commands-->
    git checkout -b new-feature
    // creates new branch
-------------------------------------------------------
    git add .
    // stages changed files

    git commit -m "commit message"
    // commits changes to git

    git push
    // pushes changes to github (the first push to a new branch will ask you to push and set the origin, copy the
    command and run that)

    git push origin <branch-name>

    git switch <branch-name>
-------------------------------------------------------
    git checkout main
    // swap back to main branch

    git pull
    // pull changes made in main from your github pull request (git pull origin <branch-name>)

    git branch
    //will show a list of branches of my machine (relative to the repository)

    git branch -D <branch-name>
    // will delete a specific branch (do not need the <>)

    git status
    // will show uncommited changes





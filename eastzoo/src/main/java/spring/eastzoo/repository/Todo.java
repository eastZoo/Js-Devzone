package spring.eastzoo.repository;

import org.hibernate.annotations.ColumnDefault;
import javax.persistence.*;

@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id = null;

    @Column(nullable = false)
    @ColumnDefault("false")
    private Boolean completed = false;

    @Column(nullable = false)
    public String todoName;
}
